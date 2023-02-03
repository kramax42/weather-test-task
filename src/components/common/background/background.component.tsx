import { useSelector } from 'react-redux';

import { srcSetSizes } from '@/constants/screen-sizes';
import {
  currentWeatherSelector,
  weatherApiVariantSelector,
} from '@/store/selectors';
import { getBackgroundImage } from '@/utils/get-background-image';

import { BackgroundStyled, Overlay } from './background.styled';

export function Background() {
  const { apiVariant } = useSelector(weatherApiVariantSelector);
  const { weatherVariant } = useSelector(currentWeatherSelector(apiVariant));

  return (
    <>
      <BackgroundStyled
        src={getBackgroundImage(weatherVariant, 'xxl')}
        alt={`${weatherVariant}-image`}
        srcSet={`
         ${getBackgroundImage(weatherVariant, 'sm')} ${srcSetSizes.sm}w,
         ${getBackgroundImage(weatherVariant, 'md')} ${srcSetSizes.md}w,
         ${getBackgroundImage(weatherVariant, 'lg')} ${srcSetSizes.lg}w,
         ${getBackgroundImage(weatherVariant, 'xl')} ${srcSetSizes.xl}w,
         ${getBackgroundImage(weatherVariant, 'xxl')} ${srcSetSizes.xxl}w`}
      />
      <Overlay />
    </>
  );
}
