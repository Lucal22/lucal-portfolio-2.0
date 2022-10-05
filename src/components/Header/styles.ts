import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 9rem;
    position: fixed;
    z-index: 1;
    background-color: ${theme.background.transparent};
    color: ${theme.colors.blackColor};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    box-shadow: 0px 4px 3px -2px rgba(0, 0, 0, 0.75);
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
