import { CurrentWeatherResponseMeteosource } from '@/types/weather-api/meteosource.types';
import { CurrentWeatherResponseOpenweather } from '@/types/weather-api/openweather.types';

import { CurrentWeatherObj } from './store';

export type FormattedCurrentWeatherResponse = Pick<
  CurrentWeatherObj,
  'icon' | 'temperature' | 'weatherVariant' | 'extended'
>;

export type CurrentWeatherResponse =
  | CurrentWeatherResponseOpenweather
  | CurrentWeatherResponseMeteosource;
