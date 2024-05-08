import { lazy } from 'react';

export const HomePage = lazy(() => import('./HomePage.jsx'));
export const SignInPage = lazy(() => import('./SigninPage.jsx'));
export const SignUpPage = lazy(() => import('./SignupPage.jsx'));
export const TrackerPage = lazy(() => import('./TrackerPage.jsx'));
export const NotFoundPage = lazy(() => import('./NotFound.jsx'));
