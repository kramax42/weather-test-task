import { Divider } from '@/components/ui/divider';
import { WidgetHeader } from '@/components/ui/widget/widget-header';
import { CurrentWeather } from '@/components/widgets/current-weather-widget/current-weather';

import { CurrentDate } from './current-date';
import { CurrentLocation } from './current-location';
import { Container, Content } from './current-weather-widget.styled';
import { ExtendedWeatherList } from './extended-weather-list';

export function CurrentWeatherWidget(): JSX.Element {
  return (
    <Container>
      <WidgetHeader title="Current weather" iconName="forecast">
        <CurrentDate />
      </WidgetHeader>
      <Divider />
      <Content>
        <CurrentLocation />
        <CurrentWeather />
        <Divider />
        <ExtendedWeatherList />
      </Content>
    </Container>
  );
}
