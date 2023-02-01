import { Text } from './suggested-location.styled';
import { ISuggestedLocation } from './suggested-location.types';

export function SuggestedLocation({
  location,
  onClick,
}: ISuggestedLocation): JSX.Element {
  const { city, country } = location;

  return (
    <Text onClick={onClick}>
      {city}, {country}
    </Text>
  );
}
