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
  addResult,
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
        dispatch(addResult());
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
        <StylesKeySign onClick={e => onClick(e)}>/</StylesKeySign>
        <StylesKeyCount onClick={e => onClick(e)}>7</StylesKeyCount>
        <StylesKeyCount onClick={e => onClick(e)}>8</StylesKeyCount>
        <StylesKeyCount onClick={e => onClick(e)}>9</StylesKeyCount>
        <StylesKeySign onClick={e => onClick(e)}>*</StylesKeySign>
        <StylesKeyCount onClick={e => onClick(e)}>4</StylesKeyCount>
        <StylesKeyCount onClick={e => onClick(e)}>5</StylesKeyCount>
        <StylesKeyCount onClick={e => onClick(e)}>6</StylesKeyCount>
        <StylesKeySign onClick={e => onClick(e)}>-</StylesKeySign>
        <StylesKeyCount onClick={e => onClick(e)}>1</StylesKeyCount>
        <StylesKeyCount onClick={e => onClick(e)}>2</StylesKeyCount>
        <StylesKeyCount onClick={e => onClick(e)}>3</StylesKeyCount>
        <StylesKeySign onClick={e => onClick(e)}>+</StylesKeySign>
        <StylesWideKeyCount onClick={e => onClick(e)}>0</StylesWideKeyCount>
        <StylesKeyCount onClick={e => onClick(e)}>.</StylesKeyCount>
        <StylesKeySign onClick={() => dispatch(addResult())}>=</StylesKeySign>
      </StylesKeyboardKeys>
    </StylesKeyboard>
  );
};
