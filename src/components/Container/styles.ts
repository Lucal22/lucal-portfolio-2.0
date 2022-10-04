import styled, { css } from 'styled-components';

export type ContainerStyleProps = {
  background: 'white' | 'gray';
};

export const Container = styled.div<ContainerStyleProps>`
  ${({ theme, background }) => css`
    margin: 0 auto;
    min-height: 100vh;
    width: ${theme.screen.size.xSmall};
    background-color: ${background == 'white'
      ? theme.background.white
      : theme.background.gray};
    color: ${background == 'white'
      ? theme.colors.blackColor
      : theme.colors.whiteColor};
    @media (min-width: ${theme.screen.size.small}) {
      width: ${theme.screen.size.small};
    }
    @media (min-width: ${theme.screen.size.medium}) {
      width: ${theme.screen.size.medium};
    }
    @media (min-width: ${theme.screen.size.large}) {
      width: ${theme.screen.size.large};
    }
  `}
`;
