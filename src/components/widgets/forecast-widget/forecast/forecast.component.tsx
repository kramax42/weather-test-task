import { useSelector } from 'react-redux';

import { forecastSelectorIsDailyActive } from '@/store/selectors';

import { DailyForecast } from '../daily-forecast';
import { HourlyForecast } from '../hourly-forecast';
import { Container } from './forecast.styled';

export function Forecast(): JSX.Element {
  const isDailyActive = useSelector(forecastSelectorIsDailyActive);

  return (
    <Container>
      {isDailyActive ? <DailyForecast /> : <HourlyForecast />}
    </Container>
  );
}
