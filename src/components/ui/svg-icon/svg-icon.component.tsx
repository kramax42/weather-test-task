import { useDynamicSvgImport } from '@/hooks';

import { SvgIconLoader } from './svg-icon.loader';
import { SvgIconProps } from './svg-icon.types';

export function SvgIcon({
  iconName,
  wrapperStyle,
  svgProp,
}: SvgIconProps): JSX.Element {
  const { loading, Icon } = useDynamicSvgImport(iconName);

  return (
    <div
      style={{
        ...wrapperStyle,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {!loading && Icon ? <Icon {...svgProp} /> : <SvgIconLoader />}
    </div>
  );
}
