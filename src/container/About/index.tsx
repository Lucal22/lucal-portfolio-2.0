import React, { useState } from 'react';
import Container from '../../components/Container';
import * as Styled from './styles';
import AboutMe from './components/AboutMe';
import Graduation from './components/Graduation';
import Tech from './components/Tech';
import { motion } from 'framer-motion';

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
              aria-label="Abre Sobre mim"
              onClick={() => {
                setAbout(!about);
                setGraduation(false);
                setTech(false);
              }}
              click={about}
            >
              {'Sobre mim'}
            </Styled.Button>
            <Styled.Button
              aria-label="Abre Graduação"
              onClick={() => {
                setGraduation(!graduation);
                setAbout(false);
                setTech(false);
              }}
              click={graduation}
            >
              {'Graduação'}
            </Styled.Button>
            <Styled.Button
              aria-label="Abre Tecnologias"
              onClick={() => {
                setTech(!tech);
                setAbout(false);
                setGraduation(false);
              }}
              click={tech}
            >
              {'Tecnologias'}
            </Styled.Button>
          </Styled.Buttons>
          <Styled.Description
            as={motion.div}
            animate={{ y: about || graduation || tech ? [50, 0] : [0, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            {about ? <AboutMe /> : null}
            {graduation ? <Graduation /> : null}
            {tech ? <Tech /> : null}

            {!about && !graduation && !tech ? (
              <Styled.DefaultText>
                Clique acima para saber mais sobre mim
              </Styled.DefaultText>
            ) : null}
          </Styled.Description>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}
