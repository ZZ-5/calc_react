import React, { useEffect } from 'react';
import {
  StylesKeyCount,
  StylesKeyDel,
  StylesKeyDelImg,
  StylesKeySign,
  StylesKeyboard,
  StylesKeyboardKeys,
  StylesWideKeyCount,
  StylesWideKeyDel,
} from './styles';
import del_icon from '../../assets/icons/delete_icon.png';
import { useAppDispatch } from '../../hooks';
import {
  getResult,
  addSymbol,
  allClear,
  deleteSymbol,
} from '../../store/calculationsSlice';

export const Keyboard = () => {
  const dispatch = useAppDispatch();

  function onClick(e: any) {
    dispatch(addSymbol(e.currentTarget.innerText));
  }

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true);
  }, []);

  const detectKeyDown = (e: KeyboardEvent) => {
    const operators = ['/', '+', '-', '*', '.'];

    if (+e.key || e.key === '0' || operators.includes(e.key)) {
      dispatch(addSymbol(e.key));
    }

    switch (e.key) {
      case 'Enter':
        dispatch(getResult());
        break;
      case 'Backspace':
        dispatch(deleteSymbol());
        break;
      case 'Delete':
        dispatch(allClear());
        break;
    }
  };

  return (
    <StylesKeyboard>
      <StylesKeyboardKeys>
        <StylesWideKeyDel onClick={() => dispatch(allClear())}>
          AC
        </StylesWideKeyDel>
        <StylesKeyDel onClick={() => dispatch(deleteSymbol())}>
          <StylesKeyDelImg src={del_icon}></StylesKeyDelImg>
        </StylesKeyDel>
        <StylesKeySign onClick={onClick}>/</StylesKeySign>
        <StylesKeyCount onClick={onClick}>7</StylesKeyCount>
        <StylesKeyCount onClick={onClick}>8</StylesKeyCount>
        <StylesKeyCount onClick={onClick}>9</StylesKeyCount>
        <StylesKeySign onClick={onClick}>*</StylesKeySign>
        <StylesKeyCount onClick={onClick}>4</StylesKeyCount>
        <StylesKeyCount onClick={onClick}>5</StylesKeyCount>
        <StylesKeyCount onClick={onClick}>6</StylesKeyCount>
        <StylesKeySign onClick={onClick}>-</StylesKeySign>
        <StylesKeyCount onClick={onClick}>1</StylesKeyCount>
        <StylesKeyCount onClick={onClick}>2</StylesKeyCount>
        <StylesKeyCount onClick={onClick}>3</StylesKeyCount>
        <StylesKeySign onClick={onClick}>+</StylesKeySign>
        <StylesWideKeyCount onClick={onClick}>0</StylesWideKeyCount>
        <StylesKeyCount onClick={onClick}>.</StylesKeyCount>
        <StylesKeySign onClick={() => dispatch(getResult())}>=</StylesKeySign>
      </StylesKeyboardKeys>
    </StylesKeyboard>
  );
};
