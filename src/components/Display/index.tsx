import React from 'react';
import { StylesCalculations, StylesDisplay, StylesResult } from './style';
import { useAppSelector } from '../../hooks';

export const Display = () => {
  const { result, value } = useAppSelector(state => state.displaySliceReducer);

  return (
    <StylesDisplay>
      <StylesCalculations>{value}</StylesCalculations>
      <StylesResult>{result}</StylesResult>
    </StylesDisplay>
  );
};
