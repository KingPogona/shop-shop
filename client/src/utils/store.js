import { configureStore } from '@reduxjs/toolkit';
import generalReducer from './reducers';

export default configureStore({
  reducer: generalReducer
})
