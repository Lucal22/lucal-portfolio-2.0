import React from 'react';
import Images from '../../../components/Images';
import * as Styled from '../styles';
import { techIcons, techIconsRight } from './add';

export default function Tech() {
  return (
    <>
      <Styled.Paragraph>
        <p>
          Em maio de 2021 decidi aprender mais sobre programação e então comecei
          os meus estudos primeiramente com <span>HTML, CSS e JavaScript,</span>{' '}
          através de cursos, documentação e praticando.
        </p>
        <Styled.Tech>
          {techIcons.map((icons, index) => {
            return (
              icons.image?<Images
                key={index}
                src={icons.image}
                alt={icons.alt}
                width={60}
                height={60}
              />:null
            );
          })}
        </Styled.Tech>
      </Styled.Paragraph>
      <Styled.Paragraph>
        <Styled.Tech>
          {techIconsRight.map((icons, index) => {
            return (
              icons.image?<Images
                key={index}
                src={icons.image}
                alt={icons.alt}
                width={60}
                height={60}
              />:null
            );
          })}
        </Styled.Tech>

        <p>
          E em 2022 tenho estudado e desenvolvido projetos utilizando frameworks
          como <span>React.js, Next.js e Typescript</span> para o frontend e
          Node.js para backend além de procurar outras alternativas para
          estilização como <span>Tailwind CSS, Styled Components e SASS.</span>
        </p>
      </Styled.Paragraph>
    </>
  );
}
