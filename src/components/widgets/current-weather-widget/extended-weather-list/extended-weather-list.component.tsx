import { useSelector } from 'react-redux';

import { CURRENT_WEATHER_EXTENDED_ITEMS } from '@/constants/weather.config';
import {
  currentWeatherSelector,
  weatherApiVariantSelector,
} from '@/store/selectors';
import { ExtendedWeatherItem } from '@/types/store';
import { formatNumberValue, getTitle } from '@/utils/format-extended-weather';

import {
  Column,
  Container,
  InfoIcon,
  NumberValue,
  Row,
  Text,
} from './extended-weather-list.styled';

export function ExtendedWeatherList(): JSX.Element {
  const { apiVariant } = useSelector(weatherApiVariantSelector);
  const { extended, status } = useSelector(currentWeatherSelector(apiVariant));

  if (status === 'failed') {
    return (
      <Container>
        <Text>Extended weather not available!</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Column>
        {Object.keys(CURRENT_WEATHER_EXTENDED_ITEMS).map((objectKey) => {
          const key = objectKey as ExtendedWeatherItem;

          if (extended[key]) {
            const { iconName } = CURRENT_WEATHER_EXTENDED_ITEMS[key];
            return (
              <Row key={key}>
                <InfoIcon iconName={iconName} />
                <Text>{`${getTitle(key)}:`}</Text>
                <NumberValue>
                  {formatNumberValue(extended[key] as number, key)}
                </NumberValue>
                <NumberValue />
              </Row>
            );
          }
          return null;
        })}
      </Column>
    </Container>
  );
}
