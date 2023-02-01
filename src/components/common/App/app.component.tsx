import { Background } from '@/components/common/background';
import { ErrorBoundary } from '@/components/common/error-boundary';
import { CalendarEventsWidget } from '@/components/widgets/calendar-events-widget/calendar-events-widget.component';
import { CurrentWeatherWidget } from '@/components/widgets/current-weather-widget/current-weather-widget.component';
import { FindMeWidget } from '@/components/widgets/find-me-widget';
import { ForecastWidget } from '@/components/widgets/forecast-widget';
import { SearchLocationWidget } from '@/components/widgets/search-location-widget';
import { WeatherApiSelect } from '@/components/widgets/weather-api-select-widget';

import { Container, Widgets } from './app.styled';

export function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <Background />
      <Container>
        <Widgets>
          <SearchLocationWidget />
          <FindMeWidget />
          <WeatherApiSelect />
          <CurrentWeatherWidget />
          <CalendarEventsWidget />
          <ForecastWidget />
        </Widgets>
      </Container>
    </ErrorBoundary>
  );
}
