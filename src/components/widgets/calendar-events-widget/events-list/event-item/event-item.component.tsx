import { memo } from 'react';

import { Container, DateTime, Summary } from './event-item.styled';
import { EventItemProps } from './event-item.types';

export const EventItem = memo(function EventItem({
  event,
}: EventItemProps): JSX.Element {
  const { dateTime, summary } = event;

  return (
    <Container>
      <DateTime>{dateTime}</DateTime>
      <Summary>{summary}</Summary>
    </Container>
  );
});
