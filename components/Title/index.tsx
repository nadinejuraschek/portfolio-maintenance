import { StyledTitle } from './styles';
import { TitleProps } from './types';

export const Title = ({
  className = '',
  children,
  centered = false,
  forwardedAs = 'div',
  page = false,
  sub = false,
}: TitleProps): JSX.Element => {
  return (
    <StyledTitle
      as={forwardedAs}
      className={className}
      centered={centered}
      page={page}
      sub={sub}
    >
      {children}
    </StyledTitle>
  );
};
