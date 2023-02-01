import ContentLoader from 'react-content-loader';

import { defaultStyles } from '@/styles/component.styles';

const { contentLoader } = defaultStyles;

export function AuthButtonLoader() {
  return (
    <ContentLoader
      speed={contentLoader.speed}
      width={78}
      height={34}
      viewBox="0 0 78 34"
      backgroundColor={contentLoader.color.backgroundColor}
      foregroundColor={contentLoader.color.foregroundColor}
    >
      <rect x="0" y="0" rx="3" ry="3" width="78" height="34" />
    </ContentLoader>
  );
}
