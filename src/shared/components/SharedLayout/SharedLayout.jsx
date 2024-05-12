import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import s from './SharedLayout.module.css';
import Head from '../Head/Head';

export default function SharedLayout() {
  return (
    <>
      <Suspense fallback={null}>
        <Head />
        <main className={s.container}>
          <Outlet />
        </main>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
