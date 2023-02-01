import styled from 'styled-components';

import { Widget } from '@/components/ui/widget';
import { colors } from '@/styles/colors';
import { componentStyles, defaultStyles } from '@/styles/component.styles';

const { authButton } = componentStyles.calendarEvents;

export const Container = styled(Widget).attrs({
  gridArea: 'events',
})`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

export const Span = styled.span`
  color: ${colors.transparent.light};
`;

export const FirstClickAuthButton = styled.button`
  padding: ${authButton.padding.vertical}px ${authButton.padding.horizontal}px;
  border: none;
  color: ${authButton.color.text};
  background-color: ${authButton.color.background};
  border-radius: ${defaultStyles.border.radius}px;
  &:hover {
    background-color: ${authButton.color.hover.background};
  }
`;
