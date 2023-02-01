import styled from 'styled-components';

import { Widget } from '@/components/ui/widget';

export const Container = styled(Widget).attrs({
  gridArea: 'forecast',
})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
