import styled from 'styled-components';

import { fadeInAnimation } from '@/styles/animation';
import { componentStyles } from '@/styles/component.styles';

const { background, overlay } = componentStyles.appContainer;

export const BackgroundStyled = styled.img`
  position: fixed;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  filter: blur(${background.filter.blur}px)
    contrast(${background.filter.contrast}%)
    opacity(${background.filter.opacity});
  transform: scale(${background.trasnform.scale});
  ${fadeInAnimation}
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${overlay.color};
  opacity: ${overlay.opacity};
`;
