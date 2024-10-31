import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchPetsFromPetShopId } from "./PetApi";


export const petsFromShopId = createAsyncThunk("pets/petsFromShopId",async(shopId,thunkAPI)=>{
    const stringToken = localStorage.getItem("token");
    const token = JSON.parse(stringToken);

    try{
        const response = await fetchPetsFromPetShopId(shopId,token);
        return response.data;     
    }
    catch(error){
        return thunkAPI.rejectWithValue(error.response.data); 
    }
})


const initialState={
    pets:[],    
    petsInPetShop:null,
    loading:false,
    error:null,
    token:localStorage.getItem("token") || null
}


const petSlice = createSlice({
    name:"pets",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(petsFromShopId.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(petsFromShopId.fulfilled,(state,action)=>{
            state.petsInPetShop=action.payload;
            state.loading=false;
        })
        .addCase(petsFromShopId.rejected,(state,action)=>{
            state.petsInPetShop = action.payload;
            state.loading=false;
        })
    }
})

export default petSlice.reducer;