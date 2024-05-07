import { lazy } from 'react';

export const HomePage = lazy(() => import('./HomePage'));
export const SignInPage = lazy(() => import('./SignInPage'));
export const SignUpPage = lazy(() => import('./SignUpPage'));
export const TrackerPage = lazy(() => import('./TrackerPage'));
export const NotFoundPage = lazy(() => import('./NotFound.jsx'));
