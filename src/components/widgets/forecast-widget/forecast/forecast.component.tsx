import { useSelector } from 'react-redux';

import {
  forecastSelector,
  forecastSelectorIsDailyActive,
  weatherApiVariantSelector,
} from '@/store/selectors';

import { DailyForecast } from '../daily-forecast';
import { HourlyForecast } from '../hourly-forecast';
import { Container, ErrorMessage } from './forecast.styled';

export function Forecast(): JSX.Element {
  const isDailyActive = useSelector(forecastSelectorIsDailyActive);

  const { apiVariant } = useSelector(weatherApiVariantSelector);
  const { status } = useSelector(forecastSelector(apiVariant));

  if (status === 'failed') {
    return (
      <Container>
        <ErrorMessage>Forecast is not available</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      {isDailyActive ? <DailyForecast /> : <HourlyForecast />}
    </Container>
  );
}
