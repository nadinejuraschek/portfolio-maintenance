import { LayoutProps } from './types';
import { Wrapper } from './styles';

export const FullPage = ({
  children,
  className = '',
}: LayoutProps): JSX.Element => {
  return <Wrapper className={className}>{children}</Wrapper>;
};
