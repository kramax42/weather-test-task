export const isProduction =
  (process.env.NODE_ENV || process.env.VITE_USER_NODE_ENV) === 'production';

export const ONE_MINUTE_IN_MS = 60000;
