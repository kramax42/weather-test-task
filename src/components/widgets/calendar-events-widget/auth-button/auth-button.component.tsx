import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useCalendarEvents } from '@/hooks';
import { calendarSelector } from '@/store/selectors';

import { AuthButtonStyled } from './auth-button.styled';

export function AuthButton(): JSX.Element {
  const { handleSignIn, handleSignOut } = useCalendarEvents();
  const { isSignedIn } = useSelector(calendarSelector);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      handleSignIn();
      setIsFirstRender(false);
    }
  }, [handleSignIn, isFirstRender]);

  return (
    <AuthButtonStyled
      type="submit"
      onClick={isSignedIn ? handleSignOut : handleSignIn}
    >
      {!isSignedIn ? 'Sign in' : 'Sign out'}
    </AuthButtonStyled>
  );
}
