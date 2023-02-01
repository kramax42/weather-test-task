import { Divider } from '@/components/ui/divider';
import { WidgetHeader } from '@/components/ui/widget/widget-header';

import { DailyHourlySwitcher } from './daily-hourly-switcher';
import { Forecast } from './forecast';
import { Container } from './forecast-widget.styled';

export function ForecastWidget(): JSX.Element {
  return (
    <Container>
      <WidgetHeader title="Forecast" iconName="forecast">
        <DailyHourlySwitcher />
      </WidgetHeader>
      <Divider />
      <Forecast />
    </Container>
  );
}
