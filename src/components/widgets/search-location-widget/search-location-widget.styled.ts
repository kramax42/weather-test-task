import styled from 'styled-components';

import { SvgIcon } from '@/components/ui/svg-icon';
import { TRANSITION_DURATION_MS } from '@/constants/animation';
import { componentStyles, defaultStyles } from '@/styles/component.styles';
import { zIndexes } from '@/styles/sizes';

const { input, searchIcon, searchButton, suggestedLocation } =
  componentStyles.searchLocation;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  line-height: 1;
  border-radius: ${defaultStyles.border.radius}px;
  padding: ${input.padding.top}px ${input.padding.right}px
    ${input.padding.bottom}px ${input.padding.left}px;
  border: none;
  outline: none;
  background-color: ${input.color.background};
  color: ${input.color.text};
  &::placeholder {
    color: ${input.color.placeholder};
  }
`;

export const SuggestedLocations = styled.div`
  z-index: ${zIndexes[1]};
  position: absolute;
  width: 100%;
  top: ${defaultStyles.smallWidget.height}px;
  border: none;
`;

export const SuggestedLocationsNotFound = styled.div`
  z-index: ${zIndexes[1]};
  position: absolute;
  width: 100%;
  top: ${defaultStyles.smallWidget.height}px;
  border: none;
`;

export const NotFound = styled.p`
  display: inline-block;
  width: 100%;
  padding: ${suggestedLocation.padding}px;
  background-color: ${suggestedLocation.color.background};
  color: ${suggestedLocation.color.text};
  backdrop-filter: blur(${defaultStyles.backdropFilter.blur}px);
  border: none;
`;

export const SearchIcon = styled(SvgIcon).attrs({
  iconName: 'search',
  svgProp: {
    width: defaultStyles.icon.width,
    height: defaultStyles.icon.height,
    fill: defaultStyles.icon.color,
  },
  wrapperStyle: {
    position: 'absolute',
    left: `${searchIcon.position.left}px`,
    top: `${searchIcon.position.top}px`,
  },
})``;

export const SearchButton = styled.button.attrs({
  'data-test': 'search-location-button',
})`
  z-index: ${zIndexes[0]};
  border: none;
  position: absolute;
  right: ${searchButton.position.right}px;
  top: ${searchButton.position.top}px;
  bottom: ${searchButton.position.bottom}px;
  margin: 0;
  padding: ${searchButton.padding.vertical}px
    ${searchButton.padding.horizontal}px;
  background-color: ${searchButton.color.background};
  color: ${searchButton.color.text};
  outline: none;
  border-top-right-radius: ${defaultStyles.border.radius}px;
  border-bottom-right-radius: ${defaultStyles.border.radius}px;
  transition: all ${TRANSITION_DURATION_MS}ms ease;
  cursor: pointer;

  &:hover {
    background-color: ${searchButton.color.hover.background};
    color: ${searchButton.color.hover.text};
  }
`;

export const Container = styled.div`
  grid-area: locationSearch;
  position: relative;
  display: flex;
  width: 100%;
  height: ${defaultStyles.smallWidget.height}px;
  justify-content: space-between;
  align-items: center;
`;
