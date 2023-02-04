import { useSelector } from 'react-redux';

import { locationSelector } from '@/store/selectors';

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

  if (status === 'failed') {
    return (
      <Container>
        <Location>Location not available</Location>
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
