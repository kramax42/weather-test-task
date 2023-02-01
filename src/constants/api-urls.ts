import { isProduction } from './common';

export const urls = isProduction
  ? {
      openweathermap: import.meta.env.VITE_VERCEL_OPENWEATHERMAP as string,
      openwethermapLocations: import.meta.env
        .VITE_VERCEL_OPENWEATHERMAP_LOCATIONS as string,
      meteosource: import.meta.env.VITE_VERCEL_METEOSOURCE as string,
      geoapify: import.meta.env.VITE_VERCEL_GEOAPIFY as string,
      googleScope: import.meta.env.VITE_VERCEL_GOOGLE_SCOPE as string,
      googleDiscoveryDocs: [
        import.meta.env.VITE_VERCEL_GOOGLE_DISCOVERY_DOCS as string,
      ],
    }
  : {
      openweathermap: import.meta.env.VITE_OPENWEATHERMAP as string,
      openwethermapLocations: import.meta.env
        .VITE_OPENWEATHERMAP_LOCATIONS as string,
      meteosource: import.meta.env.VITE_METEOSOURCE as string,
      geoapify: import.meta.env.VITE_GEOAPIFY as string,
      googleScope: import.meta.env.VITE_GOOGLE_SCOPE as string,
      googleDiscoveryDocs: [
        import.meta.env.VITE_GOOGLE_DISCOVERY_DOCS as string,
      ],
    };
