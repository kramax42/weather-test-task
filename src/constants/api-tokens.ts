import { isProduction } from './common';

export const apiTokens = isProduction
  ? {
      openweathermapKey: import.meta.env
        .VITE_VERCEL_OPENWEATHERMAP_API_KEY as string,
      meteosourceKey: import.meta.env.VITE_VERCEL_METEOSOURCE_API_KEY as string,
      geoapifyKey: import.meta.env.VITE_VERCEL_GEOAPIFY_API_KEY as string,
      googleCliendId: import.meta.env.VITE_VERCEL_GOOGLE_CLIENT_ID as string,
      googleApiKey: import.meta.env.VITE_VERCEL_GOOGLE_API_KEY as string,
    }
  : {
      openweathermapKey: import.meta.env.VITE_OPENWEATHERMAP_API_KEY as string,
      meteosourceKey: import.meta.env.VITE_METEOSOURCE_API_KEY as string,
      geoapifyKey: import.meta.env.VITE_GEOAPIFY_API_KEY as string,
      googleCliendId: import.meta.env.VITE_GOOGLE_CLIENT_ID as string,
      googleApiKey: import.meta.env.VITE_GOOGLE_API_KEY as string,
    };
