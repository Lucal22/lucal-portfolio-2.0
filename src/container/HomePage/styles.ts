import styled, { css } from 'styled-components';

export const Home = styled.div`
  ${({ theme }) => css`
    padding-top: 5rem;
    background-color: ${theme.colors.grayColor};
  `}
`;
