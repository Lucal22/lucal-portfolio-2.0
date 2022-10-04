import React from 'react';
import * as Styled from './styles';
import { ContainerStyleProps } from './styles';

export type ContainerProps = ContainerStyleProps & {
  children: React.ReactNode;
};

export default function Container({ children, background }: ContainerProps) {
  return (
    <Styled.Container background={background}>{children}</Styled.Container>
  );
}
