import ContentLoader from 'react-content-loader';

import { defaultStyles } from '@/styles/component.styles';

const { contentLoader } = defaultStyles;

export function WeatherItemLoader() {
  return (
    <ContentLoader
      speed={contentLoader.speed}
      width={130}
      height={160}
      viewBox="0 0 130 160"
      backgroundColor={contentLoader.color.backgroundColor}
      foregroundColor={contentLoader.color.foregroundColor}
    >
      <rect x="27" y="4" rx="3" ry="3" width="67" height="26" />
      <rect x="0" y="39" rx="3" ry="3" width="167" height="40" />
      <rect x="130" y="95" rx="3" ry="3" width="53" height="11" />
      <rect x="187" y="48" rx="3" ry="3" width="72" height="11" />
      <rect x="0" y="89" rx="3" ry="3" width="158" height="20" />
      <rect x="0" y="121" rx="3" ry="3" width="141" height="40" />
      <rect x="169" y="70" rx="3" ry="3" width="173" height="11" />
    </ContentLoader>
  );
}
