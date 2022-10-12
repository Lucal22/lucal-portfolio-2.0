import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.background.white};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding-top: 9rem;
    @media (min-width: ${theme.screen.size.medium}) {
      padding-top: 15rem;
    } ;
  `}
`;
