import { useSelector } from 'react-redux';

import {
  currentWeatherSelector,
  weatherApiVariantSelector,
} from '@/store/selectors';

import { CurrentWeatherLoader } from './current-weather.loader';
import {
  Container,
  Row,
  Temperature,
  WeatherIcon,
  WeatherVariant,
} from './current-weather.styled';

export function CurrentWeather(): JSX.Element {
  const { apiVariant } = useSelector(weatherApiVariantSelector);
  const { icon, temperature, weatherVariant, status } = useSelector(
    currentWeatherSelector(apiVariant),
  );

  if (status === 'loading') {
    return (
      <Container>
        <CurrentWeatherLoader />
      </Container>
    );
  }

  if (status === 'failed') {
    return (
      <Container>
        <Temperature>Error</Temperature>
      </Container>
    );
  }

  return (
    <Container>
      <Temperature>{temperature}°C</Temperature>
      <Row>
        <WeatherIcon iconName={icon || 'overcast'} />
        <WeatherVariant>{weatherVariant}</WeatherVariant>
      </Row>
    </Container>
  );
}
