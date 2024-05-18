import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshToken, refreshUser } from './redux/auth/operations';
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

export default function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const email = searchParams.get('email');

    let name = searchParams.get('email');
    name = name ? name : email && email.split('@')[0];

    const token = searchParams.get('token');
    const refreshedToken = searchParams.get('refreshToken');

    if (token && refreshedToken) {
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

    const fetchData = async () => {
      await dispatch(refreshToken());
      dispatch(refreshUser());
    };
    fetchData(); 
  }, [location.search, dispatch]);

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
