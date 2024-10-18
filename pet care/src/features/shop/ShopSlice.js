import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllPetShops } from "./ShopApi";

export const fetchPetShops = createAsyncThunk(
    "petShop/fetchPetShop",
    async (_,thunkAPI ) => {
      const stringToken = localStorage.getItem("token");
      const token = JSON.parse(stringToken)
      console.log(token,"token from localstorage");

      try {
        const response = await fetchAllPetShops(token);
        console.log(response.data,"response in petshop fetch");
        return response.data;
        
        
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );


const initialState = {
    petShop: null,
    loading: false,
    error: null,
    token: localStorage.getItem("token") || null
};

const PetShopSlice = createSlice({
    name: "petShop",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
      builder
      // Handle login actions
      .addCase(fetchPetShops.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPetShops.fulfilled, (state, action) => {
        console.log(state,"state");
        console.log(action,"action");
          
        state.petShop = action.payload;
        state.loading = false;
      })
      .addCase(fetchPetShops.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }) 
  
    },
  });


export default PetShopSlice.reducer;