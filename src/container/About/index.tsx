import React, { useState } from 'react';
import Container from '../../components/Container';
import images from '../../assets/index';
import Images from '../../components/Images';
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
                setGraduation(false);
                setTech(false);
              }}
              click={about}
            >
              {'Sobre mim'}
            </Styled.Button>
            <Styled.Button
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
          <Styled.Description>
            {about ? (
              <>
                <Styled.Paragraph>
                  <p>
                    Meu nome é Luís Carlos, tenho 26 anos e um grande interesse
                    por <span>tecnologia.</span>
                  </p>
                  <Images
                    src={images.luis}
                    alt={'Foto de Luís Carlos'}
                    width={150}
                    height={150}
                  />
                </Styled.Paragraph>
                <Styled.Paragraph>
                  <Images
                    src={images.minas}
                    alt={'Mapa de Minas Gerais'}
                    width={150}
                    height={150}
                  />
                  <p>
                    Sou de Conselheiro Lafaiete, Minas Gerais e no momento estou
                    a procura de uma oportunidade como{' '}
                    <span>desenvolvedor web.</span>
                  </p>
                </Styled.Paragraph>
                <Styled.Paragraph>
                  <p>
                    Alguns dos meus <span>hobbies</span> são assistir séries e
                    filmes, ir ao cinema, jogos online e pelo último ano está
                    sendo <span>programar.</span>
                  </p>
                  <Images
                    src={images.horde}
                    alt={'Símbolo da horda - World of Warcraft'}
                    width={150}
                    height={150}
                  />
                </Styled.Paragraph>
              </>
            ) : null}
            {graduation ? 'graduation' : null}
            {tech ? 'tech' : null}

            {!about && !graduation && !tech
              ? 'Clique acima para saber mais sobre mim'
              : null}
          </Styled.Description>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}
