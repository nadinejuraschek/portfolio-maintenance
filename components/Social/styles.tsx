import styled from 'styled-components';
import { SocialProps } from './types';

export const IconLink = styled.a<Omit<SocialProps, 'link' | 'type'>>`
  svg {
    height: 3rem;
    width: 3rem;

    path {
      fill: ${({ color }) => color && color};
      transition: fill 0.6s ease 0s;
    }
  }

  &:hover {
    transform: ${({ animated }) => (animated ? 'translateY(-2px)' : 'none')};
    transition: transform 0.2s ease 0s;
    svg {
      path {
        fill: ${({ hoverColor }) => hoverColor && hoverColor};
      }
    }
  }
`;
