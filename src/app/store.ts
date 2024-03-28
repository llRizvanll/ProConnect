import {
    AnyAction,
    ThunkDispatch,
    configureStore,
  } from '@reduxjs/toolkit';
  import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
  } from 'react-redux';
import rootReducer from './slices/index';

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStoreState = ReturnType<
  typeof store.getState
>;

export type AppThunkDispatch = ThunkDispatch<
  RootState,
  any,
  AnyAction
>;

// use this dispatch and selector across web and mobile for typings.
export const useAppDispatch = () =>
  useDispatch<AppThunkDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;
export default store;