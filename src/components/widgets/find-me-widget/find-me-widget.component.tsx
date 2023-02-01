import { useDispatch } from 'react-redux';

import { updateLocation } from '@/store/sagas/location/location.action';

import { FindMeButtonStyled, LocationIcon } from './find-me-widget.styled';

export function FindMeWidget(): JSX.Element {
  const dispatch = useDispatch();

  const onClickFindMeButton = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { longitude, latitude } = position.coords;

        dispatch(
          updateLocation({
            longitude,
            latitude,
          }),
        );
      });
    }
  };

  return (
    <FindMeButtonStyled onClick={onClickFindMeButton}>
      <LocationIcon />
      Find me
    </FindMeButtonStyled>
  );
}
