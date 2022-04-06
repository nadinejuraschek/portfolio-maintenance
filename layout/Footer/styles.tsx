import styled from 'styled-components';

export const Container = styled.footer`
  background-color: var(--secondary);
  color: var(--neutral_01);
  font-size: 1.2rem;
  padding: 20rem var(--section-padding-side) 11rem;

  @media (min-width: 700px) {
    padding: 19rem var(--section-padding-side) var(--section-padding-side);
  }
`;

export const Divider = styled.hr`
  background-color: var(--neutral_01);
  border: none;
  height: 1px;
  margin: 2rem 0 1rem;
`;

export const Socials = styled.div`
  a:not(:last-child) {
    margin-right: 3rem;
  }
`;
