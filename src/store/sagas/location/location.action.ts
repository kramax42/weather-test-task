import { Coords } from '@/types/common';

export const UPDATE_LOCATION = 'UPDATE_LOCATION';

export const updateLocation = (payload: Coords) => ({
  type: UPDATE_LOCATION,
  payload,
});
