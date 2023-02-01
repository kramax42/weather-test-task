import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { WeatherApiVariant } from '@/types/common';
import {
  DailyWeather,
  ForecastState,
  HourlyWeather,
  RequestStatusPayload,
} from '@/types/store';
import { getCurrentDate, getStaleDate } from '@/utils/get-date';

const initialState: ForecastState = {
  isDailyActive: true,
  openweather: {
    lastRequestHourlyDate: getStaleDate(),
    lastRequestDailyDate: getStaleDate(),
    daily: [],
    hourly: [],
    status: 'idle',
  },
  meteosource: {
    lastRequestHourlyDate: getStaleDate(),
    lastRequestDailyDate: getStaleDate(),
    daily: [],
    hourly: [],
    status: 'idle',
  },
};

export interface DailyForecastPayload {
  daily: DailyWeather[];
  apiVariant: WeatherApiVariant;
}

export interface HourlyForecastPayload {
  hourly: HourlyWeather[];
  apiVariant: WeatherApiVariant;
}

const forecastReducerSlice = createSlice({
  name: 'forecastReducer',
  initialState,
  reducers: {
    setForecastRequestStatus: (
      state,
      action: PayloadAction<RequestStatusPayload>,
    ) => {
      const { status, apiVariant } = action.payload;
      state[`${apiVariant}`].status = status;
    },
    setDailyForecastActive: (state) => {
      state.isDailyActive = true;
    },
    setHourlyForecastActive: (state) => {
      state.isDailyActive = false;
    },
    setDailyForecast: (state, action: PayloadAction<DailyForecastPayload>) => {
      const { daily, apiVariant } = action.payload;
      state[`${apiVariant}`].daily = daily;
    },
    setHourlyForecast: (
      state,
      action: PayloadAction<HourlyForecastPayload>,
    ) => {
      const { hourly, apiVariant } = action.payload;
      state[`${apiVariant}`].hourly = hourly;
    },
    updateLastRequestHourlyDate: (
      state,
      action: PayloadAction<WeatherApiVariant>,
    ) => {
      state[`${action.payload}`].lastRequestHourlyDate = getCurrentDate();
    },
    updateLastRequestDailyDate: (
      state,
      action: PayloadAction<WeatherApiVariant>,
    ) => {
      state[`${action.payload}`].lastRequestDailyDate = getCurrentDate();
    },
    resetForecastRequestDate: (state) => {
      state.openweather.lastRequestDailyDate = getStaleDate();
      state.openweather.lastRequestHourlyDate = getStaleDate();
      state.meteosource.lastRequestDailyDate = getStaleDate();
      state.meteosource.lastRequestHourlyDate = getStaleDate();
    },
  },
});

export const {
  setDailyForecast,
  setHourlyForecast,
  setDailyForecastActive,
  setHourlyForecastActive,
  setForecastRequestStatus,
  updateLastRequestHourlyDate,
  updateLastRequestDailyDate,
  resetForecastRequestDate,
} = forecastReducerSlice.actions;

export const forecastReducer = forecastReducerSlice.reducer;
