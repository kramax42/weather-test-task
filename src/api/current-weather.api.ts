import axios from 'axios';

import { apiTokens } from '@/constants/api-tokens';
import { urls } from '@/constants/api-urls';
import { Coords, WeatherApiVariant } from '@/types/common';
import { createUrl } from '@/utils/format-url-params';

import { CurrentWeatherResponseMeteosource } from '../types/weather-api/meteosource.types';
import { CurrentWeatherResponseOpenweather } from '../types/weather-api/openweather.types';

export const getCurrentWeather = async (
  geoPosition: Coords,
  apiVariant: WeatherApiVariant,
): Promise<
  CurrentWeatherResponseOpenweather | CurrentWeatherResponseMeteosource
> => {
  if (apiVariant === 'openweather') {
    const { openweathermap } = urls;
    const { openweathermapKey } = apiTokens;

    const baseUrl = `${openweathermap}/weather`;
    const requestParams = {
      lat: geoPosition.latitude,
      lon: geoPosition.longitude,
      units: 'metric',
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
    lat: geoPosition.latitude,
    lon: geoPosition.longitude,
    units: 'metric',
    language: 'en',
    key: meteosourceKey,
  };

  const url = createUrl(baseUrl, requestParams);
  const { data } = await axios.get<CurrentWeatherResponseMeteosource>(url);

  return data;
};
