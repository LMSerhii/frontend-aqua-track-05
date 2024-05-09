import { lazy } from 'react';

export const HomePage = lazy(() => import('./HomePage'));
export const SignInPage = lazy(() => import('./SigninPage'));
export const SignUpPage = lazy(() => import('./SignupPage'));
export const TrackerPage = lazy(() => import('./TrackerPage'));
export const NotFoundPage = lazy(() => import('./NotFound.jsx'));
