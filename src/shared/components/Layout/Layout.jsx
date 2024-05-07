import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import css from './Layout.module.css';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';

export default function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <main className={css.container}>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
