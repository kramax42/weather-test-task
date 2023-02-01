import { WeatherVariant } from '@/types/common';

export interface ForecastItemProps {
  iconName: string;
  temperature: number;
  dayOrTime: string;
  weatherVariant: WeatherVariant;
}
