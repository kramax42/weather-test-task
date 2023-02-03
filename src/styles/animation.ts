import { css } from 'styled-components';

import {
  FADE_IN_ANIMATION_DURATION_MS,
  FADE_IN_END_OPACITY,
  FADE_IN_START_OPACITY,
} from '@/constants/animation';

export const fadeInAnimation = css`
  @keyframes fadeIn {
    0% {
      opacity: ${FADE_IN_START_OPACITY};
    }
    100% {
      opacity: ${FADE_IN_END_OPACITY};
    }
  }

  animation: fadeIn ease-in-out ${FADE_IN_ANIMATION_DURATION_MS}ms;
`;
