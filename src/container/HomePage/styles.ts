import styled, { css } from 'styled-components';

export const Home = styled.div`
  ${({ theme }) => css`
    padding-top: 8rem;
    background-color: ${theme.colors.grayColor};
  `}
`;
