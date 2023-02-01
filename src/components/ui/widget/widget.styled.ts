import styled from 'styled-components';

import { componentStyles, defaultStyles } from '@/styles/component.styles';

import { WidgetContainer } from './widget.types';

const { widget } = componentStyles;

export const Container = styled.div<WidgetContainer>`
  grid-area: ${({ gridArea }) => gridArea || ''};
  width: 100%;
  height: 100%;
  padding: ${widget.padding}px;
  background: ${widget.background};
  box-shadow: ${defaultStyles.boxShadow};
  border-radius: ${defaultStyles.border.radius}px;
  backdrop-filter: blur(${defaultStyles.backdropFilter.blur}px);
  overflow-y: auto;
`;
