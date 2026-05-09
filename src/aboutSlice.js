import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAboutData } from "./api";

export const fetchAboutData = createAsyncThunk(
  "about/fetch",
  async (_, { rejectWithValue }) => {
    try { return await getAboutData(); }
    catch (e) { return rejectWithValue(e.message); }
  }
);

const aboutSlice = createSlice({
  name: "about",
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchAboutData.pending,   (s) => { s.loading = true;  s.error = null; })
     .addCase(fetchAboutData.fulfilled, (s, a) => { s.loading = false; s.data = a.payload; })
     .addCase(fetchAboutData.rejected,  (s, a) => { s.loading = false; s.error = a.payload; });
  },
});

export default aboutSlice.reducer;