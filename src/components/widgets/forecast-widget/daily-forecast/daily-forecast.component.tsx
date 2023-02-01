import { forecastSelector, weatherApiVariantSelector } from '@store/selectors';
import { useSelector } from 'react-redux';

import { ForecastItem } from '../forecast-item';

export function DailyForecast(): JSX.Element {
  const { apiVariant } = useSelector(weatherApiVariantSelector);
  const { daily: dailyForecast } = useSelector(forecastSelector(apiVariant));

  return (
    <>
      {dailyForecast.map(({ day, temperature, icon, weatherVariant }) => {
        const weekDay = day;
        return (
          <ForecastItem
            temperature={temperature}
            iconName={icon}
            dayOrTime={weekDay}
            weatherVariant={weatherVariant}
            key={day}
          />
        );
      })}
    </>
  );
}
