import { ForecastResponseOpenweather } from './openweather.types';

interface WindMeteosource {
  angle: number;
  dir: 'W' | 'E' | 'N' | 'S';
  speed: number;
}

interface PrecipitationMeteosource {
  total: number;
  type: string;
}

interface ICurrent {
  cloud_cover: number;
  icon: string;
  icon_num: number;
  precipitation: PrecipitationMeteosource;
  summary: string;
  temperature: number;
  wind: WindMeteosource;
}

interface Day {
  afternoon: null;
  all_day: {
    cloud_cover: {
      total: number;
    };
    icon: number;
    precipitation: PrecipitationMeteosource;
    temperature: number;
    temperature_max: number;
    temperature_min: number;
    weather: string;
    wind: WindMeteosource;
  };
  day: string;
  evening: null;
  icon: number;
  morning: null;
  summary: string;
  weather: string;
}

interface Daily {
  data: Day[];
}

interface Hour {
  cloud_cover: {
    total: number;
  };
  date: string;
  icon: number;
  precipitation: PrecipitationMeteosource;
  summary: string;
  temperature: number;
  weather: string;
  wind: WindMeteosource;
}

interface Hourly {
  data: Hour[];
}

interface CommonWeatherResponseMeteosource {
  current: ICurrent | null;
  daily: Daily | null;
  elevation: number;
  hourly: Hourly | null;
  lat: string;
  lon: string;
  timezone: string;
  units: UNITS_SYSTEM | 'us' | 'uk' | 'ca';
}

export interface CurrentWeatherResponseMeteosource
  extends CommonWeatherResponseMeteosource {
  current: NonNullable<CommonWeatherResponseMeteosource['current']>;
}

export interface DailyForecastResponseMeteosource
  extends CommonWeatherResponseMeteosource {
  daily: NonNullable<CommonWeatherResponseMeteosource['daily']>;
}

export interface HourlyForecastResponseMeteosource
  extends CommonWeatherResponseMeteosource {
  hourly: NonNullable<CommonWeatherResponseMeteosource['hourly']>;
}

export type DailyForecastResponse =
  | DailyForecastResponseMeteosource
  | ForecastResponseOpenweather;

export type HourlyForecastResponse =
  | ForecastResponseOpenweather
  | HourlyForecastResponseMeteosource;
