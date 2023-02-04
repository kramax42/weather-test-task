import styled from 'styled-components';

import { SvgIcon } from '@/components/ui/svg-icon';
import { fadeInAnimation } from '@/styles/animation';
import { componentStyles } from '@/styles/component-styles';
import { below } from '@/styles/screens';
import { ISvgIcon } from '@/types/common';

const { forecast } = componentStyles;

export const ForecastWeatherIcon = styled(SvgIcon).attrs<ISvgIcon>(
  ({ iconName }) => ({
    iconName,
    svgProp: {
      width: forecast.weatherIcon.width,
      height: forecast.weatherIcon.height,
    },
  }),
)``;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${forecast.item.gap}px;

  ${fadeInAnimation}
`;

export const DayOrTime = styled.p`
  text-transform: uppercase;
  font-size: ${forecast.item.fontSize.dayOrTime}px;
  color: ${forecast.item.color.dayOrTime};
`;

export const Temperature = styled.p`
  font-size: ${forecast.item.fontSize.temperature.desktop}px;
  color: ${forecast.item.color.temperature};

  ${below.laptop`
    font-size: ${forecast.item.fontSize.temperature.laptop}px;
  `}
`;

export const WeatherSummary = styled.p`
  font-size: ${forecast.item.fontSize.summary}px;
  color: ${forecast.item.color.summary};
`;
