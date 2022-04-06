import styled, { css } from 'styled-components';
import { TitleProps } from './types';

export const StyledTitle = styled.div<Omit<TitleProps, 'forwardedAs'>>`
  font-size: 4rem;
  margin: 2rem 0;
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};

  ${({ page }) =>
    page &&
    css`
      color: var(--secondary);
      font-size: 2.4rem;
    `};

  ${({ sub }) =>
    sub &&
    css`
      font-size: 1.8rem;
    `};

  @media (min-width: 700px) {
    ${({ page }) => page && css``};

    ${({ sub }) => sub && css``};
  }
`;
