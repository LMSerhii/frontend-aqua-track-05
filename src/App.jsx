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

const HomePage = lazy(() => import('./pages/Home'));
const LoginPage = lazy(() => import('./pages/SigninPage'));
const RegisterPage = lazy(() => import('./pages/SignupPage'));
const ContactsPage = lazy(() => import('./pages/Contacts'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  const { HOME, CONTACTS, REGISTER, LOGIN } = routes;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path={REGISTER}
          element={
            <RestrictedRoute
              redirectTo={CONTACTS}
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path={LOGIN}
          element={
            <RestrictedRoute redirectTo={CONTACTS} component={<LoginPage />} />
          }
        />
        <Route
          path={CONTACTS}
          element={
            <PrivateRoute redicrectTo={LOGIN} component={<ContactsPage />} />
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
