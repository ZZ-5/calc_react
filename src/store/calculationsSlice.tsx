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
      const operators = ['/', '+', '-', '*', ','];
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
      state.value = eval(state.value);
      state.result = state.value;
    },
  },
});

export const { allClear, addSymbol, deleteSymbol, addResult } =
  displaySlice.actions;
export default displaySlice.reducer;
