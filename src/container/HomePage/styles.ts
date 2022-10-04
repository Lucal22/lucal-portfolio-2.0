import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.brownColor};
    background-color: ${theme.colors.grayColor};
  `}
`;
