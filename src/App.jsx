import { useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';

import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SharedLayout from './shared/components/SharedLayout/SharedLayout';
import Loader from './shared/components/Loader/Loader';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import {
  HomePage,
  NotFoundPage,
  SignInPage,
  SignUpPage,
  TrackerPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  SuccessVerifyPage,
} from './pages';
import {
  setAccessToken,
  setCredentials,
  setUserData,
  startRefreshing,
} from './redux/auth/authSlice';
import { routes } from './routes';
import { useAuth } from './hooks';
import { useRefreshTokenMutation } from './redux/authApi/authApi';

export default function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  const [refreshToken] = useRefreshTokenMutation();

  const refreshTokenValue = useSelector(state => state.auth.refreshToken);

  const handleGoogleAuth = useCallback(() => {
    const searchParams = new URLSearchParams(location.search);

    const token = searchParams.get('token');
    const refreshToken = searchParams.get('refreshToken');

    const userData = JSON.parse(searchParams.get('userData'));

    if (token && refreshToken) {
      dispatch(
        setCredentials({
          accessToken: token,
          refreshToken,
        })
      );
      dispatch(setUserData(userData));
    }
  }, [location.search, dispatch]);

  const fetchData = useCallback(async () => {
    if (refreshTokenValue) {
      dispatch(startRefreshing());

      refreshToken(refreshTokenValue)
        .unwrap()
        .then(data => {
          dispatch(setAccessToken(data.token));
        })
        .catch(() => toast.success('You have successfully logged in!'));
    }
  }, [refreshTokenValue, dispatch, refreshToken]);

  useEffect(() => {
    handleGoogleAuth();
    fetchData();
  }, [handleGoogleAuth, fetchData]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path={routes.HOME} element={<SharedLayout />}>
        <Route
          index
          element={
            <RestrictedRoute
              redirectTo={routes.TRACKER}
              component={<HomePage />}
            />
          }
        />
        <Route
          path={routes.SIGNUP}
          element={
            <RestrictedRoute
              redirectTo={routes.TRACKER}
              component={<SignUpPage />}
            />
          }
        />
        <Route
          path={routes.SIGNIN}
          element={
            <RestrictedRoute
              redirectTo={routes.TRACKER}
              component={<SignInPage />}
            />
          }
        />
        <Route
          path={routes.TRACKER}
          element={
            <PrivateRoute
              redirectTo={routes.SIGNIN}
              component={<TrackerPage />}
            />
          }
        />
        <Route
          path={routes.FORGOT}
          element={
            <RestrictedRoute
              redirectTo={routes.TRACKER}
              component={<ForgotPasswordPage />}
            />
          }
        />
        <Route
          path={routes.RESET}
          element={
            <RestrictedRoute
              redirectTo={routes.TRACKER}
              component={<ResetPasswordPage />}
            />
          }
        />
        <Route
          path={routes.SUCCESS_VERIFY_NOTIFY}
          element={
            <RestrictedRoute
              redirectTo={routes.TRACKER}
              component={<SuccessVerifyPage />}
            />
          }
        />
      </Route>
      <Route path="*" element={<SharedLayout />}>
        <Route index element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
