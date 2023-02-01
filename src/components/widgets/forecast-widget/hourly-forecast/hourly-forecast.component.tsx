import { useSelector } from 'react-redux';

import { forecastSelector, weatherApiVariantSelector } from '@/store/selectors';

import { ForecastItem } from '../forecast-item';

export function HourlyForecast(): JSX.Element {
  const { apiVariant } = useSelector(weatherApiVariantSelector);
  const { hourly: hourlyForecast } = useSelector(forecastSelector(apiVariant));

  return (
    <>
      {hourlyForecast.map(({ time, temperature, icon, weatherVariant }) => (
        <ForecastItem
          temperature={temperature}
          iconName={icon}
          dayOrTime={time}
          weatherVariant={weatherVariant}
          key={time}
        />
      ))}
    </>
  );
}
