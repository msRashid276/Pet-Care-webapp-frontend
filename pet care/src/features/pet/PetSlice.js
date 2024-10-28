import { createAsyncThunk } from "@reduxjs/toolkit"


export const petsFromShopId = createAsyncThunk()


const initialState={
    pet:[],
    petsInPetShop:[],
    loading:false,
    error:null,
    token:localStorage.getItem("token") || null
}
