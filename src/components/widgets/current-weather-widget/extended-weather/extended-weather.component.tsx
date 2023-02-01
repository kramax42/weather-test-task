import {
  currentWeatherSelector,
  weatherApiVariantSelector,
} from '@store/selectors';
import { useSelector } from 'react-redux';

import { CURRENT_WEATHER_EXTENDED_ITEMS } from '@/constants/weather.config';

import {
  Column,
  Container,
  InfoIcon,
  NumberValue,
  Row,
  Text,
} from './extended-weather.styled';

export function ExtendedWeather(): JSX.Element {
  const { apiVariant } = useSelector(weatherApiVariantSelector);
  const { extended } = useSelector(currentWeatherSelector(apiVariant));

  return (
    <Container>
      <Column>
        {Object.keys(CURRENT_WEATHER_EXTENDED_ITEMS).map((objKey) => {
          const key = objKey as keyof typeof CURRENT_WEATHER_EXTENDED_ITEMS;

          if (extended[`${key}`]) {
            const { iconName } = CURRENT_WEATHER_EXTENDED_ITEMS[`${key}`];

            return (
              <Row key={key}>
                <InfoIcon iconName={iconName} />
                <Text>{`${
                  CURRENT_WEATHER_EXTENDED_ITEMS[`${key}`].title
                }:`}</Text>
                <NumberValue>
                  {`${extended[`${key}`]}${
                    CURRENT_WEATHER_EXTENDED_ITEMS[`${key}`].unit
                  }`}
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
