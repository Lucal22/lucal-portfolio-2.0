import { CaretLeft, CaretRight } from 'phosphor-react';
import React from 'react';
import Images from '../Images';
import * as Styled from './styles';

export type CarouselProps = {
  children: React.ReactNode;
};

export default function Carousel() {
  return (
    <Styled.Container>
      <Styled.Galery>
        <Styled.image
          src={'https://source.unsplash.com/random/250x250/?beach'}
          alt={'Beach'}
        />
        <Styled.image
          src={'https://source.unsplash.com/random/250x250/?soccer'}
          alt={'soccer'}
        />

        <Styled.image
          src={'https://source.unsplash.com/random/250x250/?animal'}
          alt={'animal'}
        />

        <Styled.image
          src={'https://source.unsplash.com/random/250x250/?canada'}
          alt={'canada'}
        />

        <Styled.image
          src={'https://source.unsplash.com/random/250x250/?forest'}
          alt={'forest'}
        />
      </Styled.Galery>
      <Styled.CaretLeft as={CaretLeft} size={32} />
      <Styled.CaretRight as={CaretRight} size={32} />
    </Styled.Container>
  );
}
