import { useEffect, useState } from 'react';

import { ONE_MINUTE_IN_MS } from '@/constants/common';
import {
  getCurrentFormattedDate,
  getCurrentFormattedTime,
} from '@/utils/format-date-time';

import { Container, Day, Time } from './current-date.component.styled';

export function CurrentDate(): JSX.Element {
  const [date, setDate] = useState(() => getCurrentFormattedDate());
  const [time, setTime] = useState(() => getCurrentFormattedTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentFormattedTime());
      setDate(getCurrentFormattedDate());
    }, ONE_MINUTE_IN_MS);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Container>
      <Time>{time}</Time>
      <Day>{date}</Day>
    </Container>
  );
}
