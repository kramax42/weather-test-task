import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { WeatherApiVariant } from '@/types/common';
import {
  CurrentWeatherPayload,
  CurrentWeatherState,
  RequestStatusPayload,
} from '@/types/store';
import { getCurrentDate, getOutdatedRequestDate } from '@/utils/get-date';

const initialState: CurrentWeatherState = {
  openweather: {
    lastRequestDate: getOutdatedRequestDate(),
    status: 'idle',
    icon: 'clear-day',
    temperature: 33,
    weatherVariant: 'clear',
    extended: {
      humidity: null,
      pressure: null,
      feelsLike: null,
      windSpeed: null,
      minTemp: null,
      maxTemp: null,
    },
  },
  meteosource: {
    lastRequestDate: getOutdatedRequestDate(),
    status: 'idle',
    icon: 'clear-night',
    temperature: 22,
    weatherVariant: 'clear',
    extended: {
      humidity: null,
      pressure: null,
      feelsLike: null,
      windSpeed: null,
      minTemp: null,
      maxTemp: null,
    },
  },
} as const;

const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
  reducers: {
    updateLastRequestDate: (
      state,
      action: PayloadAction<WeatherApiVariant>,
    ) => {
      state[action.payload].lastRequestDate = getCurrentDate();
    },
    resetLastCurrentWeatherRequestDate: (state) => {
      state.meteosource.lastRequestDate = getOutdatedRequestDate();
      state.openweather.lastRequestDate = getOutdatedRequestDate();
    },

    setCurrentWeatherRequestStatus: (
      state,
      action: PayloadAction<RequestStatusPayload>,
    ) => {
      const { status, apiVariant } = action.payload;
      state[apiVariant].status = status;
    },
    setCurrentWeather: (
      state,
      action: PayloadAction<CurrentWeatherPayload>,
    ) => {
      const { icon, temperature, weatherVariant, extended, apiVariant } =
        action.payload;

      state[apiVariant].icon = icon;
      state[apiVariant].temperature = temperature;
      state[apiVariant].weatherVariant = weatherVariant;
      state[apiVariant].extended = extended;
    },
  },
});

export const {
  setCurrentWeather,
  setCurrentWeatherRequestStatus,
  updateLastRequestDate,
  resetLastCurrentWeatherRequestDate,
} = currentWeatherSlice.actions;

export const currentWeatherReducer = currentWeatherSlice.reducer;
