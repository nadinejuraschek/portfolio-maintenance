import { Wrapper } from './styles';

import { LayoutProps } from './types';

export const FullPage = ({
  children,
  className = '',
}: LayoutProps): JSX.Element => {
  return <Wrapper className={className}>{children}</Wrapper>;
};
