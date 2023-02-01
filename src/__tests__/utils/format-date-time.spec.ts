import { formatCalendarEventDateTime } from '@/utils/format-date-time';

describe('Calendar event date and time format function', () => {
  test('formatCalendarEventDateTime() should work', () => {
    const dateTime = new Date('11 May 2009 14:00:22');
    const expectedValue = '14:00 11-05-09';

    expect(formatCalendarEventDateTime(dateTime)).toBe(expectedValue);
  });
});
