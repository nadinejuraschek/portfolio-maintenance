import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: var(--section-padding-side);

  height: calc(100vh - 8rem);
  width: 100vw;

  @media (min-width: 700px) {
    height: calc(100vh - 6rem);
  }
`;
