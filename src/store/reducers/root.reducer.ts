import { combineReducers } from '@reduxjs/toolkit';

import { calendarEventsReducer } from './calendar-events.reducer';
import { currentWeatherReducer } from './current-weather.reducer';
import { forecastReducer } from './forecast.reducer';
import { locationReducer } from './location.reducer';
import { weatherApiReducer } from './weather-api.reducer';

export const rootReducer = combineReducers({
  location: locationReducer,
  calendarEvents: calendarEventsReducer,
  currentWeather: currentWeatherReducer,
  forecast: forecastReducer,
  weatherApi: weatherApiReducer,
});
