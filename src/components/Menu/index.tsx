import { List, X } from 'phosphor-react';
import React, { useState } from 'react';
import * as Styled from './styles';
import { motion } from 'framer-motion';
import list from '../Header/mock';

import Image from 'next/image';
import Links from '../Links';

export type MenuProps = {
  children: React.ReactNode;
};

export default function Menu() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Styled.Button
        aria-label="Abre e fecha Menu"
        onClick={() => {
          setMenu(!menu);
        }}
      >
        {!menu ? <List /> : <X />}
      </Styled.Button>
      <Styled.Menu
        open={menu}
        as={motion.div}
        whileInView={{ x: [200, 0] }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
      >
        <Styled.Nav>
          {list.map((item) => {
            return (
              <Styled.MenuItens key={item.id}>
                <Links link={item.path} newTab={item.target}>
                  {item.name}
                </Links>
              </Styled.MenuItens>
            );
          })}
        </Styled.Nav>
      </Styled.Menu>
    </>
  );
}
