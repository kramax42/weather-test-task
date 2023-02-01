import ApiCalendar from 'react-google-calendar-api';

import { isProduction } from '@/constants/common';
import { apiCalendarConfig } from '@/constants/google-calendar.config';

export class ApiCalendarService {
  apiCalendar: ApiCalendar;

  static instance: ApiCalendarService;

  static getInstance() {
    if (!this.instance) {
      this.instance = new ApiCalendarService();
    }
    return this.instance;
  }

  constructor() {
    this.apiCalendar = isProduction
      ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: default exist in production
        // eslint-disable-next-line new-cap
        new ApiCalendar.default(apiCalendarConfig)
      : new ApiCalendar(apiCalendarConfig);
  }

  getApiCalendar() {
    return this.apiCalendar;
  }
}
