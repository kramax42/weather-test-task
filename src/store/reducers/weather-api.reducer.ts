import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { WeatherApiVariant } from '@/types/common';

interface IWeatherApiState {
  apiVariant: WeatherApiVariant;
}

const initialState: IWeatherApiState = {
  apiVariant: 'openweather',
};

const weatherApiSlice = createSlice({
  name: 'weatherApi',
  initialState,
  reducers: {
    setWeatherApiVariant: (state, action: PayloadAction<WeatherApiVariant>) => {
      state.apiVariant = action.payload;
    },
  },
});

export const { setWeatherApiVariant } = weatherApiSlice.actions;

export const weatherApiReducer = weatherApiSlice.reducer;
