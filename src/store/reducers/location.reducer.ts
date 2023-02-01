import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Location, RequestStatus } from '@/types/common';
import { LocationState } from '@/types/store';

const initialState: LocationState = {
  isAutoDetectingLocation: false,
  city: 'Dubai',
  country: 'United Arab Emirates',
  latitude: 25.2653471,
  longitude: 55.2924914,
  status: 'idle',
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<Location>) => {
      const { city, country, latitude, longitude } = action.payload;
      state.city = city;
      state.country = country;
      state.latitude = latitude;
      state.longitude = longitude;
    },
    setIsAutoDetectingLocation: (state) => {
      state.isAutoDetectingLocation = true;
    },
    setLocationRequestStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.status = action.payload;
    },
  },
});
export const {
  setLocation,
  setIsAutoDetectingLocation,
  setLocationRequestStatus,
} = locationSlice.actions;

export const locationReducer = locationSlice.reducer;
