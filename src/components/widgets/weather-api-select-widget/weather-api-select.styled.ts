import styled from 'styled-components';

import { componentStyles, defaultStyles } from '@/styles/component-styles';

const { weatherApiSelect } = componentStyles;

export const Option = styled.option`
  font-size: ${weatherApiSelect.fontSize}px;
  background-color: ${weatherApiSelect.color.background};
  color: ${weatherApiSelect.color.text};
`;

export const Select = styled.select`
  grid-area: weatherApiSelect;
  height: ${defaultStyles.smallWidget.height}px;
  padding: ${weatherApiSelect.padding}px;
  border: none;
  font-size: ${weatherApiSelect.fontSize}px;
  border-radius: ${defaultStyles.border.radius}px;
  background-color: ${weatherApiSelect.color.background};
  color: ${weatherApiSelect.color.text};
  backdrop-filter: blur(${defaultStyles.backdropFilter.blur}px);
`;
