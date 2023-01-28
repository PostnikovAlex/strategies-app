import { configureStore } from '@reduxjs/toolkit';
import strategiesReducer from './strategies/strategiesSlice';
export default configureStore({
  reducer: {
    strategies: strategiesReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
