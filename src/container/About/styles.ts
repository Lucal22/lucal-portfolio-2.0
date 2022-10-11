import styled, { css } from 'styled-components';

export type AboutStyleProps = {
  click: boolean;
};

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
    @media (min-width: ${theme.screen.size.large}) {
      padding-top: 15rem;
    } ;
  `}
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Button = styled.button<AboutStyleProps>`
  ${({ theme, click }) => css`
    border: 1.5px solid black;
    border-radius: 25px;
    background-color: ${click ? theme.background.gray : theme.background.white};
    box-shadow: ${click ? '0px 4px 3px -2px rgba(0, 0, 0, 0.75)' : 'none'};
    font-size: ${theme.fonts.size.small};
    font-weight: 500;
    padding: 0.5rem;
    color: ${theme.colors.blackColor};
    @media (min-width: ${theme.screen.size.large}) {
      font-size: ${theme.fonts.size.big};
      &:hover {
        box-shadow: 0px 4px 3px -2px rgba(0, 0, 0, 0.75);
      }
    } ;
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    @media (min-width: ${theme.screen.size.medium}) {
      width: 50%;
      margin: 0 auto;
      padding-top: 3rem;
    } ;
  `}
`;

export const Paragraph = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.blackColor};
    display: flex;
    padding-top: ${theme.spaces.large};
    gap: ${theme.spaces.small};
    align-items: center;

    p {
      font-size: ${theme.fonts.size.small};
      font-weight: 400;
      text-align: justify;

      span {
        color: ${theme.colors.blackColor};
        background: ${theme.colors.greenColor};
      }
    }
    img {
      min-width: 6.7rem;
    }

    @media (min-width: ${theme.screen.size.medium}) {
      p {
        font-size: ${theme.fonts.size.medium};
      }
      img {
        min-width: 10rem;
      }
    }

    @media (min-width: ${theme.screen.size.large}) {
      p {
        font-size: ${theme.fonts.size.big};
      }
      img {
        min-width: 15rem;
      }
    }
  `}
`;

export const Tech = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 4rem 4rem;
    gap: 2rem;
    img {
      min-width: 4rem;
    }
    @media (min-width: ${theme.screen.size.large}) {
      img {
        min-width: 6rem;
      }
      grid-template-columns: 6rem 6rem;
    }
  `}
`;

export const DefaultText = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.grayColor};
    padding-top: 10rem;
    text-align: center;
  `}
`;
