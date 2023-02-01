import styled from 'styled-components';

import { componentStyles } from '@/styles/component.styles';
import { below } from '@/styles/screens';
import { spaces } from '@/styles/sizes';

const { forecastWidget } = componentStyles;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-height: ${forecastWidget.minHeight}px;

  ${below.tablet`
    overflow-x: scroll;
    justify-content: space-between;
    gap: ${spaces[4]}px;
  `}
`;
