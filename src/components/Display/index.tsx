import React from 'react';
import { StylesCalculations, StylesDisplay, StylesResult } from './style';
import { useAppSelector } from '../../hooks';

export const Display = () => {
  const calculations = useAppSelector(state => state.displaySliceReducer.value);
  const result = useAppSelector(state => state.displaySliceReducer.result);

  return (
    <StylesDisplay>
      <StylesCalculations>{calculations}</StylesCalculations>
      <StylesResult>{result}</StylesResult>
    </StylesDisplay>
  );
};
