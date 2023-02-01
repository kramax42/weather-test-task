import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { MAX_CALENDAR_EVENTS_DISPLAY } from '@/constants/google-calendar.config';
import { ApiCalendarService } from '@/services/google-calendar.service';
import {
  setLoggedIn,
  setLoggedOut,
  storevents,
} from '@/store/reducers/calendar-events.reducer';
import { ListUpcomingEvent, ListUpcomingEvents } from '@/types/common';
import { formatCalendarEventDateTime } from '@/utils/format-date-time';

export const useCalendarEvents = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleSignIn = () => {
    const apiCalendar = ApiCalendarService.getInstance().getApiCalendar();

    const signIn = () => {
      apiCalendar.handleAuthClick();
      apiCalendar.tokenClient.callback = async ({
        access_token,
        token_type,
      }: {
        access_token: string;
        token_type: string;
      }) => {
        dispatch(setLoggedIn([token_type, access_token].join(' ')));

        const { result }: ListUpcomingEvents =
          await apiCalendar.listUpcomingEvents(MAX_CALENDAR_EVENTS_DISPLAY);

        result.items.forEach(
          ({ summary, start: { dateTime } }: ListUpcomingEvent) =>
            dispatch(
              storevents({
                summary,
                dateTime: formatCalendarEventDateTime(new Date(dateTime)),
              }),
            ),
        );
      };
    };

    apiCalendar.onLoadCallback = function s() {
      signIn();
      setIsLoaded(true);
    };

    if (isLoaded) {
      signIn();
    }
  };

  const handleSignOut = () => {
    const apiCalendar = ApiCalendarService.getInstance().getApiCalendar();
    apiCalendar.handleSignoutClick();
    dispatch(setLoggedOut());
  };

  return {
    handleSignIn,
    handleSignOut,
    isLoaded,
  };
};
