import { Component, ErrorInfo } from 'react';

import { ErrorBoundaryStyled } from './error-boundary.styled';
import { ErrorBoundaryProps, ErrorBoundaryState } from './error-boundary.types';

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <ErrorBoundaryStyled>
          <h2>💥An Error Has Occurred!💥</h2>
          <details>
            {error && error.message}
            <br />
            {errorInfo && errorInfo.componentStack}
          </details>
        </ErrorBoundaryStyled>
      );
    }

    return children;
  }
}
