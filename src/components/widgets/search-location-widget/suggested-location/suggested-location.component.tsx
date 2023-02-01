import { Text } from './suggested-location.styled';
import { SuggestedLocationProps } from './suggested-location.types';

export function SuggestedLocation({
  location,
  onClickSuggestedLocation,
}: SuggestedLocationProps): JSX.Element {
  const { city, country } = location;

  return (
    <Text onClick={onClickSuggestedLocation}>
      {city}, {country}
    </Text>
  );
}
