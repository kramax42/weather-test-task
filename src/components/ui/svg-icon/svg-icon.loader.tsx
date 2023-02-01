import ContentLoader from 'react-content-loader';

import { defaultStyles } from '@/styles/component.styles';

const { contentLoader } = defaultStyles;

export function SvgIconLoader() {
  return (
    <ContentLoader
      speed={contentLoader.speed}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      backgroundColor={contentLoader.color.backgroundColor}
      foregroundColor={contentLoader.color.foregroundColor}
    >
      <rect x="-1" y="-1" rx="3" ry="3" width="24" height="24" />
    </ContentLoader>
  );
}
