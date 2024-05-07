import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <Suspense fallback={null}>
        <main className={css.container}>
          <Outlet />
        </main>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
