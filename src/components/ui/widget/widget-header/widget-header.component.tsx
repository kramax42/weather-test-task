import { memo } from 'react';

import { Row, Title, TitleIcon } from './widget-header.styled';
import { WidgetHeaderProps } from './widget-header.types';

export const WidgetHeader = memo(function WidgetHeader({
  title,
  iconName,
  children,
}: WidgetHeaderProps): JSX.Element {
  return (
    <Row>
      <Title>
        <TitleIcon iconName={iconName} />
        {title}
      </Title>
      {children}
    </Row>
  );
});
