import { lazy, useEffect } from 'react';
import { routes } from './routes';
import { useAuth } from './hooks';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import Layout from './shared/components/Layout/Layout';
import Loader from './shared/components/Loader/Loader';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const Dashboard = lazy(() => import('./pages/TrackerPage'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));

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
      <Route path={HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path={SIGNUP}
          element={
            <RestrictedRoute redirectTo={TRACKER} component={<SignUpPage />} />
          }
        />
        <Route
          path={SIGNIN}
          element={
            <RestrictedRoute redirectTo={TRACKER} component={<LoginPage />} />
          }
        />
        <Route
          path={TRACKER}
          element={
            <PrivateRoute redicrectTo={SIGNIN} component={<Dashboard />} />
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <Layout>
            <NotFoundPage />
          </Layout>
        }
      />
    </Routes>
  );
}
