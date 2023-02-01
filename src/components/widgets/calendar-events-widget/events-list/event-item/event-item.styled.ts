import styled from 'styled-components';

import { componentStyles } from '@/styles/component.styles';
import { spaces } from '@/styles/sizes';

const { eventItem } = componentStyles.calendarEvents;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: ${spaces[3]}px;
`;

export const DateTime = styled.span`
  font-size: ${eventItem.fontSize}px;
  color: ${eventItem.dateTime.color};
`;

export const Summary = styled.span`
  font-size: ${eventItem.fontSize}px;
  color: ${eventItem.summary.color};
`;
