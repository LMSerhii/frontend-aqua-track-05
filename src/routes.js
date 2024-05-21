export const routes = {
  HOME: '/',
  TRACKER: '/tracker',
  USERS: '/users',
  SIGNUP: '/signup',
  SIGNIN: '/signin',
  LOGOUT: '/logout',
  CURRENT: '/current',
  REFRESH: '/refresh',
  FORGOT: '/forgot-password-form',
  FORGOT_REQUEST: '/forgot-password',

  RESET: '/reset-password-form/:otp',

  RESET_REQUEST: '/reset-password',

  SUCCESS_VERIFY_NOTIFY: '/notify',
  VERIFY: '/verify',
};

export const BASE_URL = 'http://localhost:3001/api/v1';
// export const BASE_URL = 'https://backend-aqua-track-05.onrender.com/api/v1';
