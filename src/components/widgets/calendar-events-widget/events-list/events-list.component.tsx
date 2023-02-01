import { memo } from 'react';
import uniqid from 'uniqid';

import { EventItem } from './event-item';
import { Container, Span } from './events-list.styled';
import { EventListProps } from './events-list.types';

export const EventsList = memo(function EventsList({
  events,
}: EventListProps): JSX.Element {
  return (
    <Container>
      {events.length ? (
        events.map((event) => <EventItem key={uniqid()} event={event} />)
      ) : (
        <Span>No events</Span>
      )}
    </Container>
  );
});
