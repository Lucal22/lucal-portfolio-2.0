import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;

export const Galery = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  flex-flow: row nowrap;
  flex-shrink: 0;
  gap: 1.5rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const image = styled.div`
  ${({ theme }) => css`
    width: 25rem;
    height: 100%;
    @media (min-width: ${theme.screen.size.small}) {
      width: 34rem;
      height: 100%;
    }
    @media (min-width: ${theme.screen.size.medium}) {
      width: 40rem;
      height: 100%;
    }
    @media (min-width: ${theme.screen.size.large}) {
      width: 80rem;
      height: 100%;
    } ;
  `}
`;

export const CaretLeft = styled.button`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    height: 100%;
    top: 0;
    left: 5%;
    border: none;
    cursor: pointer;
    color: black;
    background-color: transparent;
    backdrop-filter: blur(4px);
    transition: all 60ms ease-in-out;
    &:hover {
      background-color: #efefef;
    }
    @media (min-width: ${theme.screen.size.small}) {
      left: 5%;
    }
    @media (min-width: ${theme.screen.size.medium}) {
      left: 15%;
    }
  `}
`;

export const CaretRight = styled.button`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    height: 100%;
    top: 0;
    right: 5%;
    border: none;
    cursor: pointer;
    color: black;
    background-color: transparent;
    backdrop-filter: blur(4px);
    transition: all 60ms ease-in-out;
    &:hover {
      background-color: #efefef;
    }
    @media (min-width: ${theme.screen.size.small}) {
      right: 5%;
    }
    @media (min-width: ${theme.screen.size.medium}) {
      right: 15%;
    }
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    padding-top: 0.5rem;
    color: ${theme.colors.blackColor};
    h1 {
      font-size: ${theme.fonts.size.medium};
      font-weight: 400;
      text-align: center;

      @media (min-width: ${theme.screen.size.medium}) {
        font-size: ${theme.fonts.size.big};
      }
    }
  `}
`;

export const Line = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  background-color: black;
  height: 0.1rem;
`;

export const Description = styled.div`
  ${({ theme }) => css`
    padding-top: 1rem;
    h2 {
      font-size: ${theme.fonts.size.medium};
      font-weight: 400;
      color: black;
    }
  `}
`;

export const Topics = styled.p`
  ${({ theme }) => css`
    padding-top: 1rem;
    font-size: ${theme.fonts.size.small};
    font-weight: 400;
    color: ${theme.colors.blackColor};
    span {
      color: ${theme.colors.grayColor};
    }
    a {
      color: ${theme.colors.blueColor};
    }
  `}
`;
