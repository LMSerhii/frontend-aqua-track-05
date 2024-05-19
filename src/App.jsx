import { useCallback, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
import { setDateFromGoogle } from './redux/auth/authSlice';
import defaultAvatar from './shared/images/homePage/Rectangle22x-min.png';
import { routes } from './routes';
import { useAuth } from './hooks';
import { refreshToken, refreshUser } from './redux/auth/operations';

export default function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  const handleGoogleAuth = useCallback(() => {
    const searchParams = new URLSearchParams(location.search);

    const email = searchParams.get('email');
    const token = searchParams.get('token');
    const refreshedToken = searchParams.get('refreshToken');

    if (email && token && refreshedToken) {
      const name = searchParams.get('name') || email.split('@')[0];

      dispatch(
        setDateFromGoogle({
          user: {
            name,
            email,
            avatar: defaultAvatar,
          },
          token,
          refreshedToken,
        })
      );
    }
  }, [location.search, dispatch]);

  const fetchData = useCallback(async () => {
    dispatch(refreshToken());
    dispatch(refreshUser());
  }, [dispatch]);

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
