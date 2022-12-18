import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const LoginUser = createAsyncThunk("createUser", async (val) => {
  const res = await axios.put("http://localhost:8001/api/login", {
    User_Email : val.email,
    User_Password : val.password,
  });
  return res.data;
});

const LoginUserSlicer = createSlice({
  name: "todo",
  initialState: {
    error: false,
    UserSignUp: [],
    SignUp : false
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.UserSignUp = action.payload;
      state.SignUp = true
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.error = true;
    });
  },
});

const { reducer } = LoginUserSlicer;
export default reducer;