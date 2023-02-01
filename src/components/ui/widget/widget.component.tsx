import { Container } from './widget.styled';
import { WidgetProps } from './widget.types';

export function Widget({
  children,
  className,
  gridArea = '',
}: WidgetProps): JSX.Element {
  return (
    <Container className={className} gridArea={gridArea}>
      {children}
    </Container>
  );
}
