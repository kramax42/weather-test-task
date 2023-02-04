import ContentLoader from 'react-content-loader';

import { defaultStyles } from '@/styles/component-styles';

const { contentLoader } = defaultStyles;

export function CurrentWeatherLoader() {
  return (
    <ContentLoader
      speed={contentLoader.speed}
      width={220}
      height={150}
      viewBox="0 0 220 150"
      backgroundColor={contentLoader.color.backgroundColor}
      foregroundColor={contentLoader.color.foregroundColor}
    >
      <rect x="0" y="0" rx="2" ry="2" width="428" height="95" />
      <rect x="0" y="111" rx="2" ry="2" width="394" height="99" />
    </ContentLoader>
  );
}
