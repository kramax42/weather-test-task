import ContentLoader from 'react-content-loader';

import { defaultStyles } from '@/styles/component-styles';

const { contentLoader } = defaultStyles;

export function CurrentLocationLoader() {
  return (
    <ContentLoader
      speed={contentLoader.speed}
      width={160}
      height={30}
      viewBox="0 0 160 30"
      backgroundColor={contentLoader.color.backgroundColor}
      foregroundColor={contentLoader.color.foregroundColor}
    >
      <rect x="0" y="0" rx="3" ry="3" width="167" height="40" />
    </ContentLoader>
  );
}
