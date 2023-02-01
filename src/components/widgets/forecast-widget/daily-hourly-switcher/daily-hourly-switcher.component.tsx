import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setDailyForecastActive,
  setHourlyForecastActive,
} from '@/store/reducers/forecast.reducer';
import { updateForecast } from '@/store/sagas/forecast/forecast.action';
import { forecastSelectorIsDailyActive } from '@/store/selectors';

import {
  Container,
  Input,
  Switch,
  Title,
} from './daily-hourly-switcher.styled';

export function DailyHourlySwitcher(): JSX.Element {
  const dispatch = useDispatch();
  const isDailyActive = useSelector(forecastSelectorIsDailyActive);

  const onChangeInput = () => {
    if (isDailyActive) {
      dispatch(setHourlyForecastActive());
    } else {
      dispatch(setDailyForecastActive());
    }
  };

  useEffect(() => {
    dispatch(updateForecast());
  }, [isDailyActive, dispatch]);

  return (
    <Container>
      <Title isActive={isDailyActive} data-test="daily-span">
        Daily
      </Title>
      <Input checked={!isDailyActive} onChange={onChangeInput} />
      <Switch />
      <Title isActive={!isDailyActive} data-test="hourly-span">
        Hourly
      </Title>
    </Container>
  );
}
