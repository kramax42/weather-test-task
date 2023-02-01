import { IsCoordsChangedArgs } from '@/types/common';

export const isCoordsChanged = ({
  latitude,
  longitude,
  prevLatitude,
  prevLongitude,
}: IsCoordsChangedArgs) => {
  return prevLatitude !== latitude || prevLongitude !== longitude;
};
