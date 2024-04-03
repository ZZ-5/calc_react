import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
      const operators = ['/', '+', '-', '*', '.'];
      if (
        (operators.includes(action.payload) && state.value === '') ||
        (operators.includes(action.payload) &&
          operators.includes(state.value.slice(-1)))
      ) {
        return;
      }
      state.value += action.payload;
    },
    deleteSymbol: (state: DisplayState) => {
      state.value = state.value.slice(0, -1);
    },
    addResult: (state: DisplayState) => {
      let a = 0;
      let sign = '';
      let b = 0;
      const action = ['-', '+', '*', '/'];

      for (let i = 0; i < state.value.length; i++) {
        if (action.includes(state.value[i])) {
          sign = state.value[i];
          a = Number(state.value.slice(0, i));
          b = Number(state.value.slice(i + 1));
        }
      }

      switch (sign) {
        case '+':
          a = a + b;
          state.result = a.toString();
          b = 0;
          break;
        case '-':
          a = a - b;
          state.result = a.toString();
          b = 0;
          break;
        case '*':
          a = a * b;
          state.result = a.toString();
          b = 0;
          break;
        case '/':
          a = a / b;
          state.result = a.toString();
          b = 0;
          break;
      }
    },
  },
});

export const { allClear, addSymbol, deleteSymbol, addResult } =
  displaySlice.actions;
export default displaySlice.reducer;
