import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const UpdateUser = createAsyncThunk("UpdateUser", async (arr) => {
  console.log(localStorage.getItem("UserId"));
  const res = await axios.put("http://localhost:8001/api/user", {
    id : localStorage.getItem("UserId"),
    User_Todo : arr
  });  
  return res.data;
});

const UpdateSlicer = createSlice({
  name: "UpdateUser",
  initialState: {
    userData: {},
    error: false,
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(UpdateUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(UpdateUser.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.loading = false;
    });
    builder.addCase(UpdateUser.rejected, (state, action) => {
        state.error = true
    });
  },
});

const {reducer} = UpdateSlicer;
export default reducer