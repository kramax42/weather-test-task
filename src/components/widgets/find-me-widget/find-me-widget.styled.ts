import styled from 'styled-components';

import { SvgIcon } from '@/components/ui/svg-icon';
import { componentStyles, defaultStyles } from '@/styles/component.styles';
import { spaces } from '@/styles/sizes';

const { icon } = defaultStyles;

const { findMeButton } = componentStyles;

export const LocationIcon = styled(SvgIcon).attrs({
  iconName: 'location',
  svgProp: {
    width: icon.width,
    height: icon.height,
    fill: icon.color,
  },
})``;

export const FindMeButtonStyled = styled.button`
  grid-area: findMeButton;
  display: flex;
  height: ${defaultStyles.smallWidget.height}px;
  border-radius: ${defaultStyles.border.radius}px;
  background-color: ${findMeButton.color.background};
  color: ${findMeButton.color.text};
  justify-content: center;
  align-items: center;
  font-size: ${findMeButton.fontSize}px;
  gap: ${spaces[2]}px;
  backdrop-filter: blur(${defaultStyles.backdropFilter.blur}px);
  border: none;

  &:hover {
    background-color: ${findMeButton.color.hover.background};
  }
`;
