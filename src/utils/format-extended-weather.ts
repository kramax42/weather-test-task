import { CURRENT_WEATHER_EXTENDED_ITEMS } from '@/constants/weather.config';
import { ExtendedWeatherItem } from '@/types/store';

export const getTitle = (key: ExtendedWeatherItem) => {
  return CURRENT_WEATHER_EXTENDED_ITEMS[key].title;
};

export const getUnit = (key: ExtendedWeatherItem) => {
  return CURRENT_WEATHER_EXTENDED_ITEMS[key].unit;
};

export const formatNumberValue = (value: number, key: ExtendedWeatherItem) => {
  return `${value}${getUnit(key)}`;
};
