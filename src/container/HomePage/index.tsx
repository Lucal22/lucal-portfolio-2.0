import React from 'react';
import Container from '../../components/Container';
import * as Styled from './styles';
import images from '../../assets/index';
import Images from '../../components/Images';
import { LinkedinLogo, Envelope } from 'phosphor-react';
import { IoLogoGithub } from 'react-icons/io';
import Links from '../../components/Links';

export default function HomePage() {
  return (
    <Styled.Home>
      <Container background="gray" height={'full'}>
        <Styled.Content>
          <Styled.Presentation>
            <figure>
              <Images src={images.luis} alt={'Luis Carlos'} />
            </figure>
            <Styled.Description>
              <h1>Luís Carlos Santos Silvestre</h1>
              <h2>Engenheiro Eletricista e Desenvolvedor Web</h2>
              <Styled.Media>
                <Links
                  link="https://www.linkedin.com/in/lu%C3%ADs-carlos-723a28165/"
                  newTab={true}
                >
                  <LinkedinLogo size={32} weight="light" />
                </Links>
                <Links newTab={true}>
                  <Envelope
                    onClick={async () => {
                      await navigator.clipboard.writeText(
                        'luiscsilvestre22@gmail.com',
                      );
                      alert('Email copiado');
                    }}
                    size={32}
                    weight="light"
                  />
                </Links>
                <Links link="https://github.com/Lucal22" newTab={true}>
                  <IoLogoGithub size={32} />
                </Links>
              </Styled.Media>
            </Styled.Description>
          </Styled.Presentation>
        </Styled.Content>
      </Container>
    </Styled.Home>
  );
}
