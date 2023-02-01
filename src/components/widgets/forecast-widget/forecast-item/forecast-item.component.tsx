import { memo } from 'react';
import { useSelector } from 'react-redux';

import { forecastSelector, weatherApiVariantSelector } from '@/store/selectors';

import { WeatherItemLoader } from './forecast-item.loader';
import {
  DayOrTime,
  ForecastWeatherIcon,
  Item,
  Temperature,
  WeatherSummary,
} from './forecast-item.styled';
import { ForecastItemProps } from './forecast-item.types';

export const ForecastItem = memo(function ForecastItem({
  temperature,
  dayOrTime,
  iconName,
  weatherVariant,
}: ForecastItemProps): JSX.Element {
  const { apiVariant } = useSelector(weatherApiVariantSelector);
  const { status } = useSelector(forecastSelector(apiVariant));

  if (status === 'loading') {
    return <WeatherItemLoader />;
  }

  return (
    <Item>
      <DayOrTime>{dayOrTime}</DayOrTime>
      {iconName && <ForecastWeatherIcon iconName={iconName} />}
      <Temperature>{temperature}°C</Temperature>
      <WeatherSummary>{weatherVariant}</WeatherSummary>
    </Item>
  );
});
