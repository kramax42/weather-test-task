import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { spaces } from '@/styles/sizes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${spaces[2]}px;
`;

export const Span = styled.span`
  color: ${colors.transparent.light};
`;
