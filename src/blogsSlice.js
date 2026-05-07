import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBlogs } from "./api";

export const fetchBlogs = createAsyncThunk("blogs/fetchAll",
  async (_, { rejectWithValue }) => {
    try { return await getBlogs(); }
    catch (e) { return rejectWithValue(e.message); }
  }
);

const s = createSlice({
  name: "blogs",
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchBlogs.pending,   (s) => { s.loading = true;  s.error = null; })
     .addCase(fetchBlogs.fulfilled, (s, a) => { s.loading = false; s.data = a.payload; })
     .addCase(fetchBlogs.rejected,  (s, a) => { s.loading = false; s.error = a.payload; });
  },
});
export default s.reducer;