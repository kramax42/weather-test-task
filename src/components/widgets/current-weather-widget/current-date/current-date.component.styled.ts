import styled from 'styled-components';

import { componentStyles } from '@/styles/component.styles';
import { below } from '@/styles/screens';
import { spaces } from '@/styles/sizes';

const { date, time } = componentStyles.currentWeatherWidget;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;

  ${below.mobileL`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${spaces[2]}px;
  `}
`;

export const Day = styled.time`
  font-size: ${date.fontSize}px;
  color: ${date.color.text};
`;

export const Time = styled.time`
  font-size: ${time.fontSize}px;
  color: ${time.color.text};
`;
