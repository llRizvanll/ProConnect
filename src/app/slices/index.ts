import { combineReducers } from '@reduxjs/toolkit';
import bookmarkSlice from './bookmarkSlice';

const rootReducer = combineReducers({
  bookmarkSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;