import styled from 'styled-components';

import { Widget } from '@/components/ui/widget';

export const Container = styled(Widget).attrs({
  gridArea: 'currentWeatherWidget',
})`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
