import { css } from 'styled-components';

export const TRANSITION_DURATION_MS = 300;
export const FADE_IN_ANIAMTION_DURATION_MS = 500;

export const fadeInAnimation = css`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: fadeIn ease-in-out ${FADE_IN_ANIAMTION_DURATION_MS}ms;
`;
