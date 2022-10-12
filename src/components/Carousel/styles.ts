import styled, { css } from 'styled-components';

export type CarouselStylesProp = {
  hide: boolean;
};

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    position: relative;
  `}
`;

export const Galery = styled.div`
  display: flex;
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
    min-width: 15rem;
    min-height: 15rem;
    @media (min-width: ${theme.screen.size.small}) {
      width: 25rem;
      height: 18.75rem;
    }
    @media (min-width: ${theme.screen.size.medium}) {
      width: 40rem;
      height: 30rem;
    }
    @media (min-width: ${theme.screen.size.large}) {
      width: 80rem;
      height: 60rem;
    } ;
  `}
`;

export const CaretLeft = styled.button<CarouselStylesProp>`
  ${({ hide }) => css`
    position: absolute;
    display: ${hide ? 'none' : 'flex'};
    align-items: center;
    height: 100%;
    top: 0;
    border: none;
    cursor: pointer;
    color: black;
    background-color: transparent;
    backdrop-filter: blur(4px);
    transition: all 60ms ease-in-out;
    &:hover {
      background-color: #efefef;
    }
  `}
`;

export const CaretRight = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  top: 0;
  right: 0;
  border: none;
  cursor: pointer;
  color: black;
  background-color: transparent;
  backdrop-filter: blur(4px);
  transition: all 60ms ease-in-out;
  &:hover {
    background-color: #efefef;
  }
`;
