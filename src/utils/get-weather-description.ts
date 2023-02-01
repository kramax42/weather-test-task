import { WEATHER_CONFIG, WEATHER_VARIANTS } from '@/constants/weather.config';
import { WeatherApiVariant, WeatherVariant } from '@/types/common';

export const getWeatherDescription = (
  iconNum: string,
  apiVariant: WeatherApiVariant,
): {
  weatherVariant: WeatherVariant;
  iconName: string;
} => {
  let isDayIcon = true;
  const defaultKey: WeatherVariant = 'overcast';

  const key: WeatherVariant =
    WEATHER_VARIANTS.find((variant) => {
      const dayIcons = WEATHER_CONFIG[variant].apiIcons.day[apiVariant];
      if (dayIcons.includes(iconNum)) {
        return true;
      }

      const nightIcons = WEATHER_CONFIG[variant].apiIcons.night[apiVariant];
      if (nightIcons.includes(iconNum)) {
        isDayIcon = false;
        return true;
      }

      return false;
    }) || defaultKey;

  return {
    weatherVariant: key,
    iconName: WEATHER_CONFIG[key].icons[isDayIcon ? 'day' : 'night'],
  };
};
