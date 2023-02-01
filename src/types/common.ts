import { srcSetSizes } from '@/constants/screen-sizes';
import { WEATHER_VARIANTS } from '@/constants/weather.config';
import { weatherApiVariants } from '@/constants/weather-api-variants';

export type WeatherApiVariant = typeof weatherApiVariants[number];

export interface EventItem {
  summary: string;
  dateTime: string;
}

export interface ISvgIcon {
  iconName: string;
}

export interface Coords {
  latitude: number;
  longitude: number;
}

export interface Location {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface ListUpcomingEvent {
  summary: string;
  start: { dateTime: string };
}

export interface ListUpcomingEvents {
  result: { items: ListUpcomingEvent[] };
}

export type SearchParams = Record<string, string | number>;

export type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export type WeatherVariant = typeof WEATHER_VARIANTS[number];

export type SrcSetSize = keyof typeof srcSetSizes;
export type BackgroundSrc = string;

export interface WeatherConfig<T extends WeatherVariant> {
  backgroundSrc: Record<SrcSetSize, BackgroundSrc>;
  icons: {
    day: `${T}-day`;
    night: `${T}-night`;
  };
  apiIcons: {
    day: {
      openweather: string[];
      meteosource: string[];
    };
    night: {
      openweather: string[];
      meteosource: string[];
    };
  };
}

export interface IsCoordsChangedArgs {
  latitude: number;
  longitude: number;
  prevLatitude: number | null;
  prevLongitude: number | null;
}
