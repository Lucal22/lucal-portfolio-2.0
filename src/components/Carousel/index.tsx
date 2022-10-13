import { CaretLeft, CaretRight } from 'phosphor-react';
import React, { useState } from 'react';
import Images from '../Images';
import * as Styled from './styles';
import projects from './mock';

export default function Carousel() {
  const [slide, setSlide] = useState(0);
  return (
    <Styled.Container>
      <Styled.Galery>
        <Styled.image>
          <Images src={projects[slide].src} alt={projects[slide].alt} />
        </Styled.image>
        <Styled.CaretLeft
          onClick={() =>
            setSlide(slide === 0 ? projects.length - 1 : slide - 1)
          }
        >
          <CaretLeft size={32} />
        </Styled.CaretLeft>
        <Styled.CaretRight
          onClick={() => setSlide(slide == projects.length - 1 ? 0 : slide + 1)}
        >
          <CaretRight size={32} />
        </Styled.CaretRight>
      </Styled.Galery>

      <Styled.Title>
        <h1>Back end blog com strapi</h1>
      </Styled.Title>
      <Styled.Line></Styled.Line>
      <Styled.Description>
        <h2>Descrição:</h2>
        <p>
          <span>Stack:</span> xdxdxdxd
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus in
          rem, alias quidem sit harum incidunt sed optio, est sunt culpa rerum
          modi similique tempore molestias atque blanditiis itaque animi?
        </p>
      </Styled.Description>
    </Styled.Container>
  );
}
