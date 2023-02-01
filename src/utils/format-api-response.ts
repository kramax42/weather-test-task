import { FormattedCurrentWeatherResponse } from '@/types/api';
import { Location, WeatherApiVariant } from '@/types/common';
import { LocationByNameResponseOpenweather } from '@/types/location-api/location-openweather';
import { DailyWeather, HourlyWeather } from '@/types/store';
import {
  CurrentWeatherResponseMeteosource,
  DailyForecastResponseMeteosource,
  HourlyForecastResponseMeteosource,
} from '@/types/weather-api/meteosource.types';
import {
  CurrentWeatherResponseOpenweather,
  ForecastResponseOpenweather,
} from '@/types/weather-api/openweather.types';

import { formatDateToShortDayName, formatTime } from './format-date-time';
import { formatTemperature } from './format-temperature';
import { getWeatherDescription } from './get-weather-description';

export const formatOpenweatherResponse = (
  data: CurrentWeatherResponseOpenweather,
): FormattedCurrentWeatherResponse => {
  const {
    main: { temp, feels_like, humidity, pressure, temp_max, temp_min },
    weather: {
      0: { icon },
    },
    wind,
  } = data;

  const result: FormattedCurrentWeatherResponse = {
    temperature: formatTemperature(temp),
    extended: {
      humidity,
      pressure,
      feelsLike: formatTemperature(feels_like),
      maxTemp: formatTemperature(temp_max),
      minTemp: formatTemperature(temp_min),
      windSpeed: wind.speed,
    },
    icon: getWeatherDescription(icon, 'openweather').iconName,
    weatherVariant: getWeatherDescription(icon, 'openweather').weatherVariant,
  };

  return result;
};

export const formatMeteosourceResponse = (
  data: CurrentWeatherResponseMeteosource,
): FormattedCurrentWeatherResponse => {
  const { icon_num, temperature, wind } = data.current;

  const result: FormattedCurrentWeatherResponse = {
    temperature: formatTemperature(temperature),
    extended: {
      humidity: null,
      pressure: null,
      feelsLike: null,
      maxTemp: null,
      minTemp: null,
      windSpeed: wind.speed,
    },
    icon: getWeatherDescription(String(icon_num), 'meteosource').iconName,
    weatherVariant: getWeatherDescription(String(icon_num), 'meteosource')
      .weatherVariant,
  };

  return result;
};

export const formatDailyForecastResponse = (
  data: DailyForecastResponseMeteosource | ForecastResponseOpenweather,
  apiVariant: WeatherApiVariant,
): DailyWeather[] => {
  if (apiVariant === 'meteosource') {
    const { daily } = data as DailyForecastResponseMeteosource;
    return daily.data.splice(1).map((dayItem) => {
      const {
        day,
        all_day: { icon, temperature },
      } = dayItem;

      return {
        day: formatDateToShortDayName(new Date(day)),
        temperature: formatTemperature(temperature),
        icon: getWeatherDescription(String(icon), 'meteosource').iconName,
        weatherVariant: getWeatherDescription(String(icon), 'meteosource')
          .weatherVariant,
      };
    });
  }

  const WEATHER_DAY_TIME = '15:00:00';
  const { list } = data as ForecastResponseOpenweather;
  const days = list.filter((i) => i.dt_txt.includes(WEATHER_DAY_TIME)).slice(1);

  return days.map((dayItem) => {
    const {
      dt_txt,
      main: { temp },
      weather: {
        0: { icon },
      },
    } = dayItem;

    return {
      day: formatDateToShortDayName(new Date(dt_txt)),
      temperature: formatTemperature(temp),
      icon: getWeatherDescription(icon, 'openweather').iconName,
      weatherVariant: getWeatherDescription(icon, 'openweather').weatherVariant,
    };
  });
};

export const formatHourlyForecastResponse = (
  data: HourlyForecastResponseMeteosource | ForecastResponseOpenweather,
  apiVariant: WeatherApiVariant,
): HourlyWeather[] => {
  if (apiVariant === 'openweather') {
    const { list } = data as ForecastResponseOpenweather;
    const hours = list.splice(1, 6);

    return hours.map((hoursItem) => {
      const {
        dt_txt,
        main: { temp },
        weather: {
          0: { icon },
        },
      } = hoursItem;
      return {
        date: dt_txt,
        temperature: formatTemperature(temp),
        time: formatTime(new Date(dt_txt)),
        icon: getWeatherDescription(icon, 'openweather').iconName,
        weatherVariant: getWeatherDescription(icon, 'openweather')
          .weatherVariant,
      };
    });
  }

  const { hourly } = data as HourlyForecastResponseMeteosource;
  return hourly.data.slice(0, 6).map((hour) => ({
    time: formatTime(new Date(hour.date)),
    temperature: formatTemperature(hour.temperature),
    icon: getWeatherDescription(String(hour.icon), 'meteosource').iconName,
    weatherVariant: getWeatherDescription(String(hour.icon), 'meteosource')
      .weatherVariant,
  }));
};

export const formatOpenWeatherLocationResponse = (
  data: LocationByNameResponseOpenweather,
): Location[] => {
  return data.map(
    ({ name, lat, lon, country }) =>
      ({
        city: name,
        latitude: lat,
        longitude: lon,
        country,
      } as Location),
  );
};
