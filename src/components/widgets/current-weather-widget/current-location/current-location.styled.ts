import styled from 'styled-components';

import { fadeInAnimation } from '@/styles/animation';
import { colors } from '@/styles/colors';
import { componentStyles } from '@/styles/component.styles';
import { below } from '@/styles/screens';
import { spaces } from '@/styles/sizes';

const { location } = componentStyles.currentWeatherWidget;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${spaces[2]}px;
`;

export const Location = styled.span`
  text-align: start;
  font-size: ${location.font.size.desktop}px;
  color: ${colors.transparent.light};
  font-weight: ${location.font.weight};

  ${below.tablet`
    font-size: ${location.font.size.tablet}px;
  `}

  ${fadeInAnimation}
`;
