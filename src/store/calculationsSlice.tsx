import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { calculations } from '../functions/helpers';

type DisplayState = {
  value: string;
  result: string;
};

const initialState: DisplayState = {
  value: '',
  result: '',
};

export const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    allClear: (state: DisplayState) => {
      state.value = '';
      state.result = '';
    },
    addSymbol: (state: DisplayState, action: PayloadAction<string>) => {
      const operators = ['/', '+', '*', '.'];
      if (
        (operators.includes(action.payload) && state.value === '') ||
        (operators.includes(action.payload) &&
          operators.includes(state.value.slice(-1))) ||
        (operators.includes(action.payload) && state.value.slice(-1) === '-')
      )
        return;
      else if (state.value.slice(-1) === '-' && action.payload === '-') {
        return;
      }
      state.value += action.payload;
    },
    deleteSymbol: (state: DisplayState) => {
      state.value = state.value.slice(0, -1);
    },
    getResult: (state: DisplayState) => {
      state.result = calculations(state.value);
    },
  },
});

export const { allClear, addSymbol, deleteSymbol, getResult } =
  displaySlice.actions;
export default displaySlice.reducer;
