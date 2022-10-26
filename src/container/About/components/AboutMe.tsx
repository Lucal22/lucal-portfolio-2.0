import React from 'react';
import Images from '../../../components/Images';
import * as Styled from '../styles';
import images from '../../../assets/index';

export default function AboutMe() {
  return (
    <>
      <Styled.Paragraph>
        <p>
          Meu nome é Luís Carlos, tenho 26 anos e um grande interesse por{' '}
          <span>tecnologia.</span>
        </p>
        {images.luis?<Images
          src={images.luis}
          alt={'Foto de Luís Carlos'}
          width={150}
          height={150}
        />:null}

      </Styled.Paragraph>
      <Styled.Paragraph>
      {images.minas?<Images
          src={images.minas}
          alt={'Mapa de Minas Gerais'}
          width={150}
          height={150}
        />:null}
        <p>
          Sou de Conselheiro Lafaiete, Minas Gerais e no momento estou a procura
          de uma oportunidade como <span>desenvolvedor web.</span>
        </p>
      </Styled.Paragraph>
      <Styled.Paragraph>
        <p>
          Alguns dos meus <span>hobbies</span> são assistir séries e filmes, ir
          ao cinema, jogos online e pelo último ano está sendo{' '}
          <span>programar.</span>
        </p>
        {images.minas?<Images
          src={images.horde}
          alt={'Símbolo da horda - World of Warcraft'}
          width={150}
          height={150}
        />:null}
      </Styled.Paragraph>
    </>
  );
}
