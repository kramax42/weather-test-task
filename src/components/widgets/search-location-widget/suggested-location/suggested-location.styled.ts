import styled from 'styled-components';

import { componentStyles, defaultStyles } from '@/styles/component.styles';

const { suggestedLocation } = componentStyles.searchLocation;

export const Text = styled.p`
  cursor: pointer;
  display: inline-block;
  width: 100%;
  border: none;
  padding: ${suggestedLocation.padding}px;
  background-color: ${suggestedLocation.color.background};
  color: ${suggestedLocation.color.text};
  backdrop-filter: blur(${defaultStyles.backdropFilter.blur}px);

  &:hover {
    background-color: ${suggestedLocation.color.hover.background};
  }
`;
