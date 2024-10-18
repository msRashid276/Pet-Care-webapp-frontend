import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUserApi, registerUserApi } from "./AuthApi";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data) => {
    try {     
      const response = await registerUserApi(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data,thunkAPI ) => {
    try {
      const response = await loginUserApi(data);
      console.log(response.data,"response in slice login");
      return response.data;
      
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      state.token=null;
    },
  },
  extraReducers: (builder)=>{
    builder
    // Handle login actions
    .addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      console.log(action.payload.token,"token");
      console.log(action.payload.user,"action");
        
      state.user = action.payload.user;
      state.token = action.payload.token
      state.isAuthenticated = true;
      state.loading = false;

      localStorage.setItem("token",JSON.stringify(action.payload.token))

    })
    .addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
    
    // Handle register actions
    .addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    })
    .addCase(registerUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;