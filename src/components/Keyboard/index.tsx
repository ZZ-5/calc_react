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

  const detectKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case '1':
        dispatch(addSymbol('1'));
        break;
      case '2':
        dispatch(addSymbol('2'));
        break;
      case '3':
        dispatch(addSymbol('3'));
        break;
      case '4':
        dispatch(addSymbol('4'));
        break;
      case '5':
        dispatch(addSymbol('5'));
        break;
      case '6':
        dispatch(addSymbol('6'));
        break;
      case '7':
        dispatch(addSymbol('7'));
        break;
      case '8':
        dispatch(addSymbol('8'));
        break;
      case '9':
        dispatch(addSymbol('9'));
        break;
      case '0':
        dispatch(addSymbol('0'));
        break;
      case '+':
        dispatch(addSymbol('+'));
        break;
      case '-':
        dispatch(addSymbol('-'));
        break;
      case '*':
        dispatch(addSymbol('*'));
        break;
      case '.':
        dispatch(addSymbol('.'));
        break;
      case '/':
        dispatch(addSymbol('/'));
        break;
      case 'Enter':
        dispatch(addResult());
        break;
      case 'Backspace':
        dispatch(deleteSymbol());
        break;
      case 'Delete':
        dispatch(allClear());
        break;

      default:
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
