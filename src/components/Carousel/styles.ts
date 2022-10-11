import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.blackColor};
    position: relative;
  `}
`;

export const Galery = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex-shrink: 0;
  overflow-x: auto;
  gap: 1.5rem;
`;

export const image = styled.img`
  width: 15rem;
`;

export const CaretLeft = styled.svg`
  position: absolute;
  top: 30%;
`;
export const CaretRight = styled.svg`
  position: absolute;
  top: 30%;
  right: 0;
`;
