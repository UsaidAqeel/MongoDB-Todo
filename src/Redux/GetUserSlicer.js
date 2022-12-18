import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetUserData = createAsyncThunk("GetUserData", async (_id) => {
  const res = await axios.get(
    `http://localhost:8001/api/user${_id}`
  );
  return res.data;
});

const GetUserSlicer = createSlice({
  name: "todo",
  initialState: {
    UserData: {},
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(GetUserData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(GetUserData.fulfilled, (state, action) => {
      state.UserData = action.payload;
      state.loading = false;
    });
    builder.addCase(GetUserData.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    }); 
  },
});

const {reducer} = GetUserSlicer
export default reducer