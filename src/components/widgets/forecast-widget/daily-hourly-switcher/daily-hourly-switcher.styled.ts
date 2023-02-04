import styled from 'styled-components';

import { TRANSITION_DURATION_MS } from '@/constants/animation';
import { componentStyles } from '@/styles/component-styles';
import { getTumblerTranslateX } from '@/utils/get-tumbler-translate';

import { SwitcherTitle } from './daily-hourly-switcher.types';

const { dailyHourlySwitcher } = componentStyles;

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${dailyHourlySwitcher.container.gap}px;
  cursor: pointer;
`;

export const Title = styled.span<SwitcherTitle>`
  color: ${({ isActive }) =>
    isActive
      ? dailyHourlySwitcher.title.color.active
      : dailyHourlySwitcher.title.color.inActive};
  font-size: ${dailyHourlySwitcher.title.fontSize}px;
  letter-spacing: ${dailyHourlySwitcher.title.letterSpacing}px;
`;

export const Switch = styled.div`
  position: relative;
  width: ${dailyHourlySwitcher.switch.width}px;
  height: ${dailyHourlySwitcher.switch.height}px;
  background-color: ${dailyHourlySwitcher.switch.color.background};
  border-radius: ${dailyHourlySwitcher.switch.border.radius}px;
  padding: ${dailyHourlySwitcher.switch.padding}px;
  transition: ${TRANSITION_DURATION_MS}ms all;

  &:before {
    content: '';
    position: absolute;
    width: ${dailyHourlySwitcher.switch.tumbler.width}px;
    height: ${dailyHourlySwitcher.switch.tumbler.height}px;
    border-radius: ${dailyHourlySwitcher.switch.tumbler.border.radius}px;
    top: ${dailyHourlySwitcher.switch.tumbler.position.top}px;
    left: ${dailyHourlySwitcher.switch.tumbler.position.left}px;
    background-color: ${dailyHourlySwitcher.switch.tumbler.color.background};
    transform: translate(0, -50%);
    transition: ${TRANSITION_DURATION_MS}ms all;
  }
`;

const transformX = getTumblerTranslateX({
  switchWidth: dailyHourlySwitcher.switch.width,
  tumbletWidth: dailyHourlySwitcher.switch.tumbler.width,
  tumblerLeftPosition: dailyHourlySwitcher.switch.tumbler.position.left,
});

export const Input = styled.input.attrs({
  type: 'checkbox',
})`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    &:before {
      transform: translate(${transformX}px, -50%);
    }
  }
`;
