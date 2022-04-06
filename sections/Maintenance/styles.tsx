import styled from 'styled-components';
import { Text, Title } from 'components';
import { FullPage as FullPageLayout } from 'layout';

export const Layout = styled(FullPageLayout)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: calc(100vh - 8rem);

  @media (min-width: 700px) {
    height: calc(100vh - 6rem);
  }
`;

export const Illustration = styled.div`
  max-width: 350px;
  margin-bottom: 2rem;

  @media (min-width: 400px) {
    margin-bottom: 6rem;
  }
`;

export const StyledTitle = styled(Title)`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  text-transform: uppercase;

  @media (min-width: 330px) {
    font-size: 3rem;
  }

  @media (min-width: 450px) {
    font-size: 5rem;
  }
`;

export const StyledText = styled(Text)`
  font-size: 1.8rem;

  @media (min-width: 450px) {
    font-size: 2rem;
  }

  @media (min-width: 700px) {
    margin: 0 auto;
    max-width: 80%;
  }

  @media (min-width: 1200px) {
    font-size: 2.5rem;
    max-width: 60%;
  }
`;

export const ContactFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: var(--dark_02);
  padding: 1.5rem 2rem;

  height: 8rem;
  width: 100%;

  @media (min-width: 700px) {
    flex-direction: row;
    align-items: center;

    height: 6rem;
  }
`;

export const Copyright = styled.div`
  font-size: 1.2rem;
  color: var(--neutral_01);
  order: 1;

  @media (min-width: 700px) {
    order: 0;
  }
`;

export const ContactOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  order: 0;

  @media (max-width: 700px) {
    order: 1;

    svg {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`;

export const Empty = styled.div`
  width: 118px;

  display: none;

  @media (min-width: 700px) {
    display: block;
    order: 2;
  }
`;
