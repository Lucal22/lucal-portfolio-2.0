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
    font-size: ${theme.fonts.size.small};
    font-weight: 500;
    padding: 0.5rem;
    color: ${theme.colors.blackColor};
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.blackColor};
  `}
`;
