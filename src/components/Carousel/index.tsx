import { CaretLeft, CaretRight } from 'phosphor-react';
import React, { useState } from 'react';
import images from '../../assets/index';
import Images from '../Images';
import * as Styled from './styles';

const array = [
  {
    src: images.nations,
    alt: 'Beach',
  },
  {
    src: images.portfolio,
    alt: 'Soccer',
  },
  {
    src: images.blog,
    alt: 'Animal',
  },
];

export default function Carousel() {
  const [slide, setSlide] = useState(0);
  return (
    <Styled.Container>
      <Styled.Galery>
        <Styled.image>
          <Images src={array[slide].src} alt={array[slide].alt} />
        </Styled.image>
      </Styled.Galery>
      <Styled.CaretLeft
        hide={slide - 1 == -1 ? true : false}
        onClick={() => setSlide(slide - 1)}
      >
        <CaretLeft size={32} />
      </Styled.CaretLeft>
      <Styled.CaretRight
        onClick={() => setSlide(slide == array.length - 1 ? 0 : slide + 1)}
      >
        <CaretRight size={32} />
      </Styled.CaretRight>
    </Styled.Container>
  );
}
