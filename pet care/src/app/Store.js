  // src/app/store.js
  import { configureStore } from '@reduxjs/toolkit';
  import authReducer from '../features/auth/AuthSlice';
  import petShopReducer from '../features/shop/ShopSlice'
  import petReducer from '../features/pet/PetSlice'

  const store = configureStore({
    reducer: {
      auth: authReducer, // Ensure this matches the structure in your auth slice
      petShop: petShopReducer,
      pets: petReducer
    },
  });

  export default store; // Default export
