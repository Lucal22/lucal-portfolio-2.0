import { CaretLeft, CaretRight } from 'phosphor-react';
import React, { useState } from 'react';
import Images from '../Images';
import * as Styled from './styles';
import projects from './mock';
import Links from '../Links';

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
        <h1>{projects[slide].title}</h1>
      </Styled.Title>
      <Styled.Line></Styled.Line>
      <Styled.Description>
        <h2>Descrição:</h2>
        <Styled.Topics>{projects[slide].description}</Styled.Topics>
        <Styled.Topics>
          Stack: <span> {projects[slide].stack}</span>
        </Styled.Topics>
        {projects[slide].libs ? (
          <Styled.Topics>
            Bibliotecas auxiliares: <span> {projects[slide].libs}</span>
          </Styled.Topics>
        ) : null}

        <Styled.Topics>
          Links:{' '}
          <Links link={projects[slide].github} newTab={true}>
            Github
          </Links>{' '}
          {projects[slide].website ? (
            <>
              {'|| '}
              <Links link={projects[slide].website} newTab={true}>
                Website
              </Links>
            </>
          ) : null}{' '}
        </Styled.Topics>
      </Styled.Description>
    </Styled.Container>
  );
}
