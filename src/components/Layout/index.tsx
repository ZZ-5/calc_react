import React from 'react';
import { LayoutWrapper } from './styles';
import { Keyboard } from '../Keyboard';
import { Display } from '../Display';

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Display />
      <Keyboard />
    </LayoutWrapper>
  );
};
