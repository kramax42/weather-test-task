import axios from 'axios';

import { apiTokens } from '@/constants/api-tokens';
import { urls } from '@/constants/api-urls';
import { UNITS_SYSTEM } from '@/constants/weather.config';
import { Coords, WeatherApiVariant } from '@/types/common';
import {
  DailyForecastResponse,
  DailyForecastResponseMeteosource,
  HourlyForecastResponse,
  HourlyForecastResponseMeteosource,
} from '@/types/weather-api/meteosource.types';
import { ForecastResponseOpenweather } from '@/types/weather-api/openweather.types';
import { createUrl } from '@/utils/format-url-params';

export const getDailyWeather = async (
  geoPosition: Coords,
  apiVariant: WeatherApiVariant,
): Promise<DailyForecastResponse> => {
  if (apiVariant === 'meteosource') {
    const { meteosource } = urls;
    const { meteosourceKey } = apiTokens;

    const baseUrl = meteosource;
    const requestParams = {
      sections: 'daily',
      language: 'en',
      lat: geoPosition.latitude,
      lon: geoPosition.longitude,
      units: UNITS_SYSTEM,
      key: meteosourceKey,
    };

    const url = createUrl(baseUrl, requestParams);
    const { data } = await axios.get<DailyForecastResponseMeteosource>(url);

    return data;
  }

  const { openweathermap } = urls;
  const { openweathermapKey } = apiTokens;

  const baseUrl = `${openweathermap}/forecast`;
  const requestParams = {
    lat: geoPosition.latitude,
    lon: geoPosition.longitude,
    units: UNITS_SYSTEM,
    appid: openweathermapKey,
  };

  const url = createUrl(baseUrl, requestParams);
  const { data } = await axios.get<ForecastResponseOpenweather>(url);

  return data;
};

export const getHourlyWeather = async (
  geoPosition: Coords,
  apiVariant: WeatherApiVariant,
): Promise<HourlyForecastResponse> => {
  if (apiVariant === 'openweather') {
    const { openweathermap } = urls;
    const { openweathermapKey } = apiTokens;

    const baseUrl = `${openweathermap}/forecast`;
    const requestParams = {
      lat: geoPosition.latitude,
      lon: geoPosition.longitude,
      units: UNITS_SYSTEM,
      appid: openweathermapKey,
    };

    const url = createUrl(baseUrl, requestParams);
    const { data } = await axios.get<ForecastResponseOpenweather>(url);

    return data;
  }

  const { meteosource } = urls;
  const { meteosourceKey } = apiTokens;

  const baseUrl = meteosource;
  const requestParams = {
    sections: 'hourly',
    language: 'en',
    lat: geoPosition.latitude,
    lon: geoPosition.longitude,
    units: UNITS_SYSTEM,
    key: meteosourceKey,
  };

  const url = createUrl(baseUrl, requestParams);
  const { data } = await axios.get<HourlyForecastResponseMeteosource>(url);

  return data;
};
