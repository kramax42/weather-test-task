import styled from 'styled-components';

import { componentStyles, defaultStyles } from '@/styles/component.styles';
import { below } from '@/styles/screens';
import { spaces } from '@/styles/sizes';

const { appContainer } = componentStyles;

export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${appContainer.padding.desktop}px;
  overflow-y: auto;

  ${below.tablet`
    padding: ${appContainer.padding.tablet}px;
  `}

  ${below.mobileL`
    padding: ${appContainer.padding.mobileL}px;
  `}
`;

export const Widgets = styled.div`
  overflow-y: auto;
  width: ${appContainer.widgets.width}px;
  display: grid;
  grid-template-areas:
    'weatherApiSelect findMeButton locationSearch events'
    'currentWeatherWidget currentWeatherWidget  currentWeatherWidget events'
    'forecast forecast forecast events';
  grid-template-rows: ${defaultStyles.smallWidget.height}px max-content max-content;
  grid-template-columns: 2fr 3fr 7fr 7fr;
  grid-gap: ${spaces[2]}px;

  ${below.laptopM`
    width: 100%;
    height: 100%;
    grid-template-areas:
      'locationSearch locationSearch'
      'weatherApiSelect findMeButton'
      'currentWeatherWidget  currentWeatherWidget'
      'forecast forecast'
      'events events'
      ;
    grid-template-rows: ${defaultStyles.smallWidget.height}px ${defaultStyles.smallWidget.height}px max-content max-content max-content;
    grid-template-columns: 5fr 3fr;
  `}

  ${below.mobileL`
    grid-template-areas:
     'locationSearch'
     'findMeButton'
     'weatherApiSelect'
     'currentWeatherWidget'
     'forecast'
     'events';

    grid-template-rows: ${defaultStyles.smallWidget.height}px ${defaultStyles.smallWidget.height}px ${defaultStyles.smallWidget.height}px max-content max-content max-content;
    grid-template-columns: 100%;
  `}
`;
