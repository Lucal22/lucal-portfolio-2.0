import React from 'react';
import Images from '../../../components/Images';
import * as Styled from '../styles';
import images from '../../../assets/index';

export default function Graduation() {
  return (
    <>
      <Styled.Paragraph>
        <p>
          Minha primeira formação profissional foi um curso{' '}
          <span>técnico em eletrônica</span> e foi onde eu tive o primeiro
          contato com programação, onde utilizei arduino para simular uma{' '}
          <span>automação residencial</span> para o projeto de conclusão de
          curso.
        </p>
        {images.arduino?<Images src={images.arduino} alt="Arduino" width={150} height={150} />:null}
      </Styled.Paragraph>
      <Styled.Paragraph>
        {images.engeletrica?<Images
          src={images.engeletrica}
          alt="Engenharia elétrica"
          width={150}
          height={150}
        />:null}
        <p>
          Após concluir o curso técnico iniciei o curso de{' '}
          <span>Engenharia Elétrica,</span> que me mostrou outras maneiras de se
          utilizar programação para simulações e cálculos com{' '}
          <span>Matlab e Python.</span>
        </p>
      </Styled.Paragraph>
      <Styled.Paragraph>
        <p>
          Fiz <span>estágio</span> na engenharia CAPEX de uma multinacional e
          meses após o término, trabalhei como{' '}
          <span>auxiliar de projetos elétricos</span> em uma empresa de
          desenvolvimento de projetos industriais.
        </p>
        {images.autocad?<Images
          src={images.autocad}
          alt="Engenharia elétrica"
          width={150}
          height={150}
        />:null}
      </Styled.Paragraph>
    </>
  );
}
