import React from 'react';
import Container from '../../components/Container';
import * as Styled from './styles';

export default function HomePage() {
  return (
    <Styled.Home>
      <Container background="gray" height={'full'}>
        <Styled.Content></Styled.Content>
      </Container>
    </Styled.Home>
  );
}
