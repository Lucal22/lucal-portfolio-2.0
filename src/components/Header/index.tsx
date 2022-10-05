import React from 'react';
import Container from '../Container';
import Menu from '../Menu';
import * as Styled from './styles';

export type HeaderProps = {
  children: React.ReactNode;
};

export default function Header() {
  return (
    <Styled.Header>
      <Container background={'transparent'} height={'100'}>
        <Styled.Nav>
          <Styled.List>
            <p>item 1</p>
            <p>item 1</p>
            <p>item 1</p>
            <p>item 1</p>
          </Styled.List>
        </Styled.Nav>
      </Container>
      <Menu />
    </Styled.Header>
  );
}
