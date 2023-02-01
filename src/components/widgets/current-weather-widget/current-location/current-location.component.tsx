import { locationSelector } from '@store/selectors';
import { useSelector } from 'react-redux';

import { CurrentLocationLoader } from './current-location.loader';
import { Container, Location } from './current-location.styled';

export function CurrentLocation() {
  const { city, country, status } = useSelector(locationSelector);

  if (status === 'loading') {
    return (
      <Container>
        <CurrentLocationLoader />
      </Container>
    );
  }

  return (
    <Container>
      {city && <Location>{`${city},`}</Location>}
      <Location data-test="location-country-text">{country}</Location>
    </Container>
  );
}
