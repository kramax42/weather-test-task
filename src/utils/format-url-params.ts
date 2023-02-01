import { SearchParams } from '@/types/common';

export const formatUrlParams = (searchParams: SearchParams) => {
  return Object.entries(searchParams).reduce(
    (acc, entry) => `${acc}&${entry[0]}=${entry[1]}`,
    '',
  );
};

export const createUrl = (baseUrl: string, searchParams: SearchParams) =>
  `${baseUrl}?${formatUrlParams(searchParams)}`;
