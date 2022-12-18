import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const CreateUser = createAsyncThunk("createUser", async (val) => {
  const res = await axios.put("http://localhost:8001/api/signUp", {
    User_Name : val.name,
    User_Email : val.email,
    User_Password : val.password,
    User_FatherName : val.fathername
  });
  return res.data;
});

const CreateUserSlicer = createSlice({
  name: "todo",
  initialState: {
    error: false,
    UserSignUp: [],
    SignUp : false
  },
  extraReducers: (builder) => {
    builder.addCase(CreateUser.fulfilled, (state, action) => {
      state.UserSignUp = action.payload;
      state.SignUp = true
    });
    builder.addCase(CreateUser.rejected, (state, action) => {
      state.error = true;
    });
  },
});

const { reducer } = CreateUserSlicer;
export default reducer;