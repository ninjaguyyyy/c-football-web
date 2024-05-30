import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { combineReducers } from 'redux';

import { layoutReducer } from './slices/layout';

const rootReducer = combineReducers({
  layout: layoutReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
