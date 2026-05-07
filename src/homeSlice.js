import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeData } from "./api";

export const fetchHomeData = createAsyncThunk(
  "home/fetch",
  async (_, { rejectWithValue }) => {
    try { return await getHomeData(); }
    catch (e) { return rejectWithValue(e.message); }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchHomeData.pending,   (s) => { s.loading = true;  s.error = null; })
     .addCase(fetchHomeData.fulfilled, (s, a) => { s.loading = false; s.data = a.payload; })
     .addCase(fetchHomeData.rejected,  (s, a) => { s.loading = false; s.error = a.payload; });
  },
});

export default homeSlice.reducer;