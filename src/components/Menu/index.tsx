import { List } from 'phosphor-react';
import React, { useState } from 'react';
import * as Styled from './styles';
import { motion } from 'framer-motion';

import Image from 'next/image';
//import Links from '../Links';

export type MenuProps = {
  children: React.ReactNode;
};

export default function Menu() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Styled.Button>
        <List
          aria-label="Abre e fecha Menu"
          onClick={() => {
            setMenu(!menu);
          }}
        />
      </Styled.Button>
      <Styled.Menu
        open={menu}
        as={motion.div}
        whileInView={{ x: [-200, 0] }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
      >
        <Styled.Nav>
          {/* {list.map((item) => {
            return (
              <Styled.MenuItens key={item.link}>
                <Links link={item.link} newTab={item.newTab}>
                  {item.children}
                </Links>
              </Styled.MenuItens>
            );
          })}*/}
        </Styled.Nav>
      </Styled.Menu>
    </>
  );
}
