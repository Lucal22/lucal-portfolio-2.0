import React from 'react';
import Carousel from '../../components/Carousel';
import Container from '../../components/Container';
import * as Styled from './styles';

export type ProjectsProps = {
  children: React.ReactNode;
};

export default function Projects() {
  return (
    <Styled.Container>
      <Container height={'full'}>
        <Styled.Content>
          <Carousel />
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}
