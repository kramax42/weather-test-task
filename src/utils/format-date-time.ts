import { format } from 'date-fns';

export const formatCalendarEventDateTime = (dateTime: Date): string =>
  format(dateTime, 'HH:mm dd-MM-yy');

export const formatTime = (dateTime: Date): string => format(dateTime, 'HH:mm');

export const formatDateToShortDayName = (date: Date): string => {
  return format(date, 'E');
};

export const getCurrentFormattedTime = () => format(new Date(), 'HH:mm');
export const getCurrentFormattedDate = () => format(new Date(), 'dd.MM.Y');
