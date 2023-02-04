import styled from 'styled-components';

import { SvgIcon } from '@/components/ui/svg-icon';
import { componentStyles, defaultStyles } from '@/styles/component-styles';
import { spaces } from '@/styles/sizes';
import { ISvgIcon } from '@/types/common';

const { extendedWeatherItem } = componentStyles;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${spaces[3]}px;
  flex-wrap: wrap;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${spaces[2]}px;
`;

export const Text = styled.span`
  color: ${extendedWeatherItem.color.text};
  font-size: ${extendedWeatherItem.font.size}px;
`;

export const NumberValue = styled.p`
  font-size: ${extendedWeatherItem.font.size}px;
  color: ${extendedWeatherItem.color.text};
`;

export const InfoIcon = styled(SvgIcon).attrs<ISvgIcon>(({ iconName }) => ({
  iconName,
  svgProp: {
    width: defaultStyles.icon.width,
    height: defaultStyles.icon.height,
    fill: defaultStyles.icon.color,
  },
}))``;
