import styled, { css } from 'styled-components';

export const Home = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.grayColor};
  `}
`;
