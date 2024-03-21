import React from 'react';
import {
  StylesBigKeySign,
  StylesKeyCount,
  StylesKeyDel,
  StylesKeyDelImg,
  StylesKeySign,
  StylesKeyboard,
  StylesWideKeyCount
} from './styles';
import del_icon from '../../assets/icons/delete_icon.png';

export const Keyboard = () => {
  return (
    <StylesKeyboard>
      <StylesKeyDel>Ac</StylesKeyDel>
      <StylesKeyDel>
        <StylesKeyDelImg src={del_icon}></StylesKeyDelImg>
      </StylesKeyDel>
      <StylesKeySign>/</StylesKeySign>
      <StylesKeySign>&#215;</StylesKeySign>
      <StylesKeyCount>7</StylesKeyCount>
      <StylesKeyCount>8</StylesKeyCount>
      <StylesKeyCount>9</StylesKeyCount>
      <StylesKeySign>-</StylesKeySign>
      <StylesKeyCount>4</StylesKeyCount>
      <StylesKeyCount>5</StylesKeyCount>
      <StylesKeyCount>6</StylesKeyCount>
      <StylesBigKeySign>+</StylesBigKeySign>
      <StylesKeyCount>1</StylesKeyCount>
      <StylesKeyCount>2</StylesKeyCount>
      <StylesKeyCount>3</StylesKeyCount>
      <StylesBigKeySign>=</StylesBigKeySign>
      <StylesWideKeyCount>0</StylesWideKeyCount>
      <StylesKeyCount>,</StylesKeyCount>
    </StylesKeyboard>
  );
};
