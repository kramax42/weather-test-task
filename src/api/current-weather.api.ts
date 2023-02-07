import axios from 'axios';

import { apiTokens } from '@/constants/api-tokens';
import { urls } from '@/constants/api-urls';
import { UNITS_SYSTEM } from '@/constants/weather.config';
import { Coords, WeatherApiVariant } from '@/types/common';
import { CurrentWeatherResponseMeteosource } from '@/types/weather-api/meteosource.types';
import { CurrentWeatherResponseOpenweather } from '@/types/weather-api/openweather.types';
import { createUrl } from '@/utils/format-url-params';

export const getCurrentWeather = async (
  { latitude, longitude }: Coords,
  apiVariant: WeatherApiVariant,
): Promise<
  CurrentWeatherResponseOpenweather | CurrentWeatherResponseMeteosource
> => {
  if (apiVariant === 'openweather') {
    const { openweathermap } = urls;
    const { openweathermapKey } = apiTokens;

    const baseUrl = `${openweathermap}/weather`;
    const requestParams = {
      lat: latitude,
      lon: longitude,
      units: UNITS_SYSTEM,
      appid: openweathermapKey,
    };

    const url = createUrl(baseUrl, requestParams);
    const { data } = await axios.get<CurrentWeatherResponseOpenweather>(url);

    return data;
  }

  const { meteosource } = urls;
  const { meteosourceKey } = apiTokens;

  const baseUrl = meteosource;
  const requestParams = {
    sections: 'current',
    language: 'en',
    lat: latitude,
    lon: longitude,
    units: UNITS_SYSTEM,
    key: meteosourceKey,
  };

  const url = createUrl(baseUrl, requestParams);
  const { data } = await axios.get<CurrentWeatherResponseMeteosource>(url);

  return data;
};
