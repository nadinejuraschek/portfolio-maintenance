import { StyledText } from './styles';
import { TextProps } from './types';

export const Text = ({
  className = '',
  children,
  centered = false,
}: TextProps): JSX.Element => {
  return (
    <StyledText className={className} centered={centered}>
      {children}
    </StyledText>
  );
};
