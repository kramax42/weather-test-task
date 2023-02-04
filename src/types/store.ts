import { rootReducer } from '@/store/reducers/root.reducer';

import {
  EventItem,
  RequestStatus,
  WeatherApiVariant,
  WeatherVariant,
} from './common';

export type RootState = ReturnType<typeof rootReducer>;

export interface ExtendedWeather {
  humidity: number | null;
  pressure: number | null;
  feelsLike: number | null;
  windSpeed: number | null;
  minTemp: number | null;
  maxTemp: number | null;
}

export type ExtendedWeatherItem = keyof ExtendedWeather;

export interface CurrentWeatherObj {
  lastRequestDate: string;
  status: RequestStatus;
  icon: string;
  temperature: string | number | null;
  weatherVariant: WeatherVariant;
  extended: ExtendedWeather;
}

export type CurrentWeatherState = Record<WeatherApiVariant, CurrentWeatherObj>;

export type CurrentWeatherPayload = Pick<
  CurrentWeatherObj,
  'icon' | 'temperature' | 'weatherVariant' | 'extended'
> & { apiVariant: WeatherApiVariant };

export interface CalendarEventsState {
  isSignedIn: boolean;
  token: string | null;
  events: EventItem[];
}

export interface RequestStatusPayload {
  apiVariant: WeatherApiVariant;
  status: RequestStatus;
}

export interface Forecast {
  lastRequestHourlyDate: string;
  lastRequestDailyDate: string;
  daily: DailyWeather[];
  hourly: HourlyWeather[];
  status: RequestStatus;
}

export type ForecastState = Record<WeatherApiVariant, Forecast> & {
  isDailyActive: boolean;
};

export interface DailyWeather {
  day: string;
  temperature: number;
  icon: string;
  weatherVariant: WeatherVariant;
}

export interface HourlyWeather {
  time: string;
  temperature: number;
  icon: string;
  weatherVariant: WeatherVariant;
}

export interface LocationState {
  isAutoDetectingLocation: boolean;
  city: string;
  country: string;
  latitude: number | null;
  longitude: number | null;
  status: RequestStatus;
}
