  // src/app/store.js
  import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/AuthSlice';

  const store = configureStore({
    reducer: {
      auth: authReducer, // Ensure this matches the structure in your auth slice
    },
  });

  export default store; // Default export
