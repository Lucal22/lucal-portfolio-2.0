import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    position: fixed;
    z-index: 1;
  `}
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: none;
    @media (min-width: ${theme.screen.size.medium}) {
      display: block;
      width: 100%;
    } ;
  `}
`;

export const List = styled.ul`
  ${({ theme }) => css``}
`;
