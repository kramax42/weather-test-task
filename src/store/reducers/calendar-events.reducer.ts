import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CalendarEventsState } from '@/types/store';

const initialState: CalendarEventsState = {
  isSignedIn: false,
  token: null,
  events: [],
};

const calendarEventsSlice = createSlice({
  name: 'calendarEvents',
  initialState,
  reducers: {
    setLoggedIn(state, action: PayloadAction<string>) {
      state.isSignedIn = true;
      state.token = action.payload;
    },
    setLoggedOut(state) {
      state.token = null;
      state.isSignedIn = false;
      state.events = [];
    },
    storevents: (state, action) => {
      state.events.push(action.payload);
    },
    clearEvents: (state) => {
      state.events = [];
    },
  },
});

export const { storevents, clearEvents, setLoggedIn, setLoggedOut } =
  calendarEventsSlice.actions;

export const calendarEventsReducer = calendarEventsSlice.reducer;
