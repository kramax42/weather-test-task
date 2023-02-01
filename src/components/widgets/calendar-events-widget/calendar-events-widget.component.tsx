import { lazy, Suspense, useState } from 'react';
import { useSelector } from 'react-redux';

import { Divider } from '@/components/ui/divider';
import { WidgetHeader } from '@/components/ui/widget/widget-header';
import { calendarSelector } from '@/store/selectors';

import { AuthButtonLoader } from './auth-button/auth-button.loader';
import {
  Container,
  FirstClickAuthButton,
  Span,
} from './calendar-events-widget.styled';
import { EventsList } from './events-list';

const AuthButton = lazy(() =>
  import('./auth-button').then((module) => ({
    default: module.AuthButton,
  })),
);

export function CalendarEventsWidget(): JSX.Element {
  const { isSignedIn, events } = useSelector(calendarSelector);
  const [isAuthButtonClicked, setIsAuthButtonClicked] = useState(false);

  const onClickFirstClickAuthButton = () => {
    setIsAuthButtonClicked(true);
  };

  return (
    <Container>
      <WidgetHeader title="Calendar events" iconName="calendar">
        {isAuthButtonClicked ? (
          <Suspense fallback={<AuthButtonLoader />}>
            <AuthButton />
          </Suspense>
        ) : (
          <FirstClickAuthButton
            type="button"
            onClick={onClickFirstClickAuthButton}
          >
            Sign In
          </FirstClickAuthButton>
        )}
      </WidgetHeader>

      <Divider />

      {isSignedIn ? (
        <EventsList events={events} />
      ) : (
        <Span>You should Sign In to see calendar events</Span>
      )}
    </Container>
  );
}
