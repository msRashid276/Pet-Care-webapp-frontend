  // src/app/store.js
  import { configureStore } from '@reduxjs/toolkit';
  import authReducer from '../features/auth/AuthSlice';
  import PetShopReducer from '../features/shop/ShopSlice'

  const store = configureStore({
    reducer: {
      auth: authReducer, // Ensure this matches the structure in your auth slice
      petShop: PetShopReducer
    },
  });

  export default store; // Default export
