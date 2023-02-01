import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { weatherApiVariants } from '@/constants/weather-api-variants';
import { setWeatherApiVariant } from '@/store/reducers/weather-api.reducer';
import { updateCurrentWeather } from '@/store/sagas/current-weather/current-weather.action';
import { updateForecast } from '@/store/sagas/forecast/forecast.action';
import { weatherApiVariantSelector } from '@/store/selectors';
import { WeatherApiVariant } from '@/types/common';

import { Option, Select } from './weather-api-select.styled';

export function WeatherApiSelect(): JSX.Element {
  const { apiVariant } = useSelector(weatherApiVariantSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (apiVariant) {
      dispatch(updateCurrentWeather());
      dispatch(updateForecast());
    }
  }, [apiVariant, dispatch]);

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setWeatherApiVariant(event.target.value as WeatherApiVariant));
  };

  return (
    <Select
      data-test="weather-api-select"
      value={apiVariant}
      onChange={onChangeSelect}
    >
      {weatherApiVariants.map((variant) => (
        <Option key={variant}>{variant}</Option>
      ))}
    </Select>
  );
}
