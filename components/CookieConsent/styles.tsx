import styled, { css } from 'styled-components';

const primaryBtnStyles = css`
  background-color: var(--primary);
  border-color: var(--primary);
  color: var(--neutral_01);
`;

export const Container = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  background-color: var(--neutral_02);
  border-radius: 0.8rem;
  box-shadow: 0 4px 8px #1f292e40;
  color: var(--dark_01);
  font-size: 1.6rem;
  line-height: 1.25;
  padding: 2.4rem 3.2rem;
  text-align: center;

  width: calc(100% - 4rem);

  @media (min-width: 700px) {
    left: unset;
    right: 2rem;

    flex-direction: row;
    gap: 6.4rem;

    text-align: left;

    width: auto;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.6rem;
`;

export const Button = styled.button<{ primary?: boolean }>`
  background-color: var(--neutral_01);
  border: 1px solid var(--neutral_03);
  border-radius: 0.8rem;
  color: var(--dark_01);
  cursor: pointer;
  box-shadow: 0 2px 4px #1f292e10;
  font-size: 1.6rem;
  padding: 0.8rem 1.6rem;

  &:hover {
    box-shadow: 0 2px 4px #1f292e40;
  }

  ${({ primary }) => primary && primaryBtnStyles};
`;
