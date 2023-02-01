import styled from 'styled-components';

import { SvgIcon } from '@/components/ui/svg-icon';
import { colors } from '@/styles/colors';
import { componentStyles } from '@/styles/component.styles';
import { below } from '@/styles/screens';
import { spaces } from '@/styles/sizes';

import { IconProps } from './widget-header.types';

const { icon } = componentStyles.widget.header;

export const Row = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${spaces[2]}px;

  ${below.mobileL`
    flex-direction: column;
    align-items: flex-start;
  `}
`;

export const TitleIcon = styled(SvgIcon).attrs<IconProps>(({ iconName }) => ({
  iconName: iconName || 'calendar',
  svgProp: { width: icon.width, height: icon.height, fill: icon.color },
}))``;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spaces[2]}px;
  align-items: center;
  font-size: 18px;
  color: ${colors.white};
`;
