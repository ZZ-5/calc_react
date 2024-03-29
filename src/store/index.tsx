import { configureStore } from '@reduxjs/toolkit';
import displaySliceReducer from './calculationsSlice';
const reducer = {
  displaySliceReducer: displaySliceReducer,
};

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
