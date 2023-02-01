/* eslint-disable prefer-spread */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { css } from 'styled-components';

import { SCREEN_SIZES } from '@/constants/screen-sizes';

type Key = keyof typeof SCREEN_SIZES;

type Breakpoints = Record<Key, CB>;

type CB = (...args: unknown[]) => string;

const reduceFn = (acc: Breakpoints, key: Key) => {
  acc[key] = (...args) =>
    css`
      @media (max-width: ${SCREEN_SIZES[key]}px) {
        ${css.apply(null, args)}
      }
    ` as unknown as string;

  return acc;
};

export const below: Breakpoints = (Object.keys(SCREEN_SIZES) as Key[]).reduce(
  reduceFn,
  {} as Breakpoints,
);

// export const above = Object.keys(SCREEN_SIZES).reduce((acc, key) => {
//   acc[key] = (...args: any) => css`
//     @media (min-width: ${SCREEN_SIZES[key]}px) {
//       ${css(...args)}
//     }
//   `;
//   return acc;
// }, {});
