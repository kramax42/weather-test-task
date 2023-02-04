import styled from 'styled-components';

import { SvgIcon } from '@/components/ui/svg-icon';
import { fadeInAnimation } from '@/styles/animation';
import { componentStyles } from '@/styles/component-styles';
import { below } from '@/styles/screens';
import { spaces } from '@/styles/sizes';
import { ISvgIcon } from '@/types/common';

const { temperature, weatherVariant, errorMessage } =
  componentStyles.currentWeatherWidget;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Temperature = styled.p`
  font-size: ${temperature.fontSize.desktop}px;
  color: ${temperature.color.text};

  ${below.tablet`
    font-size: ${temperature.fontSize.tablet}px;
  `}

  ${below.mobileL`
    font-size: ${temperature.fontSize.mobileL}px;
  `}

  ${fadeInAnimation}
`;

export const ErrorMessage = styled.p`
  font-size: ${errorMessage.fontSize.desktop}px;
  color: ${errorMessage.color.text};

  ${below.tablet`
    font-size: ${errorMessage.fontSize.tablet}px;
  `}

  ${below.mobileL`
    font-size: ${errorMessage.fontSize.mobileL}px;
  `}
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: ${spaces[2]}px;
  ${fadeInAnimation}
`;

export const WeatherIcon = styled(SvgIcon).attrs<ISvgIcon>(({ iconName }) => ({
  iconName,
  svgProp: {
    width: weatherVariant.icon.width,
    height: weatherVariant.icon.height,
  },
}))``;

export const WeatherVariant = styled.p`
  font-size: ${weatherVariant.fontSize.desktop}px;
  color: ${weatherVariant.color.text};

  ${below.tablet`
    font-size: ${weatherVariant.fontSize.tablet}px;
  `}
`;
