import React from 'react';
import * as Styled from './styles';

export type ContactProps = {
  children: React.ReactNode;
};

export default function Contact() {
  return (
    <Styled.Container>
      <h1>Olá mundo</h1>
    </Styled.Container>
  );
}
