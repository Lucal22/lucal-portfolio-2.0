import React, { useState } from 'react';
import Container from '../../components/Container';
import * as Styled from './styles';

export type AboutProps = Styled.AboutStyleProps;

export default function About() {
  const [about, setAbout] = useState(false);
  const [graduation, setGraduation] = useState(false);
  const [tech, setTech] = useState(false);

  return (
    <Styled.Container>
      <Container height={'full'}>
        <Styled.Content>
          <Styled.Buttons>
            <Styled.Button
              onClick={() => {
                setAbout(!about);
              }}
              click={about}
            >
              {'Sobre mim'}
            </Styled.Button>
            <Styled.Button
              onClick={() => {
                setGraduation(!graduation);
              }}
              click={graduation}
            >
              {'Graduação'}
            </Styled.Button>
            <Styled.Button
              onClick={() => {
                setTech(!tech);
              }}
              click={tech}
            >
              {'Tecnologias'}
            </Styled.Button>
          </Styled.Buttons>
          <Styled.Description></Styled.Description>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}
