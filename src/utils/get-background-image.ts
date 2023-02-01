import { WEATHER_CONFIG } from '@/constants/weather.config';
import { SrcSetSize, WeatherVariant } from '@/types/common';

export const getBackgroundImage = (
  weatherVariant: WeatherVariant,
  srcSetSize: SrcSetSize,
) => {
  return WEATHER_CONFIG[weatherVariant].backgroundSrc[srcSetSize];
};
