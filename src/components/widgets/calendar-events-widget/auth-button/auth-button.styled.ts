import styled from 'styled-components';

import { componentStyles, defaultStyles } from '@/styles/component-styles';

const { authButton } = componentStyles.calendarEvents;

export const AuthButtonStyled = styled.button`
  padding: ${authButton.padding.vertical}px ${authButton.padding.horizontal}px;
  color: ${authButton.color.text};
  background-color: ${authButton.color.background};
  border-radius: ${defaultStyles.border.radius}px;
  border: none;

  &:hover {
    background-color: ${authButton.color.hover.background};
  }
`;
