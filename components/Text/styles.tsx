import styled from 'styled-components';
import { TextProps } from './types';

export const StyledText = styled.p<TextProps>`
  color: var(--dark_01);
  font-size: 2rem;
  font-weight: 200;
  line-height: 1.5;
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
`;
