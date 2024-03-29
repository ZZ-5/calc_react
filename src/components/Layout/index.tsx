import React from 'react';
import { LayoutWrapper, PhoneWrapper } from './styles';
import { Keyboard } from '../Keyboard';
import { Display } from '../Display';

export const Layout = () => {
  return (
    <LayoutWrapper>
      <PhoneWrapper>
        <Display />
        <Keyboard />
      </PhoneWrapper>
    </LayoutWrapper>
  );
};
