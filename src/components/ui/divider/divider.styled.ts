import styled from 'styled-components';

import { componentStyles } from '@/styles/component.styles';

const { divider } = componentStyles;

export const DividerStyled = styled.hr`
  opacity: ${divider.opacity};
  width: 100%;
  margin: ${divider.verticalMargin}px 0;
`;
