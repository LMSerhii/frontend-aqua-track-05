import { useEffect } from 'react';
import { routes } from './routes';
import { useAuth } from './hooks';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import Loader from './shared/components/Loader/Loader';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import SharedLayout from './shared/components/SharedLayout/SharedLayout';
import {
  HomePage,
  NotFoundPage,
  SignInPage,
  SignUpPage,
  TrackerPage,
} from './pages';

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  const { HOME, TRACKER, SIGNUP, SIGNIN } = routes;

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path={HOME} element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo={TRACKER} component={<SignUpPage />} />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo={TRACKER} component={<SignInPage />} />
          }
        />
        <Route
          path={TRACKER}
          element={
            <PrivateRoute redirectTo={SIGNIN} component={<TrackerPage />} />
          }
        />
      </Route>
      <Route path="*" element={<SharedLayout />}>
        <Route index element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
