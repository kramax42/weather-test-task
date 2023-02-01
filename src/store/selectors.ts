import { WeatherApiVariant } from '@/types/common';
import { RootState } from '@/types/store';

export const locationSelector = (store: RootState) => store.location;

export const eventsSelector = (store: RootState) => store.calendarEvents.events;

export const calendarSelector = (store: RootState) => store.calendarEvents;

export const currentWeatherSelector =
  (apiVariant: WeatherApiVariant) => (state: RootState) =>
    state.currentWeather[apiVariant];

export const forecastSelector =
  (apiVariant: WeatherApiVariant) => (state: RootState) =>
    state.forecast[apiVariant];

export const forecastSelectorIsDailyActive = (state: RootState) =>
  state.forecast.isDailyActive;

export const weatherApiVariantSelector = (state: RootState) => state.weatherApi;
