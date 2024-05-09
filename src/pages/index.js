import { lazy } from 'react';

export const HomePage = lazy(() => import('./HomePage.jsx'));
export const SignInPage = lazy(() => import('./SignInPage.jsx'));
export const SignUpPage = lazy(() => import('./SignUpPage.jsx'));
export const TrackerPage = lazy(() => import('./TrackerPage.jsx'));
export const NotFoundPage = lazy(() => import('./NotFound.jsx'));
