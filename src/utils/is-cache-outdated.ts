import { differenceInMinutes } from 'date-fns';

import { API_REQUEST_CACHE_TIME_IN_MINUTES } from '@/constants/cache-time';

export const isCacheRequestOutdated = (lastRequestDate: string) => {
  return (
    Math.abs(
      differenceInMinutes(new Date(lastRequestDate), new Date(Date.now())),
    ) > API_REQUEST_CACHE_TIME_IN_MINUTES
  );
};
