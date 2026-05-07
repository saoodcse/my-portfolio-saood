import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGithubStats } from "./api";

export const fetchGithub = createAsyncThunk("github/fetch",
  async (_, { rejectWithValue }) => {
    try { return await getGithubStats(); }
    catch (e) { return rejectWithValue(e.message); }
  }
);

const s = createSlice({
  name: "github",
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchGithub.pending,   (s) => { s.loading = true;  s.error = null; })
     .addCase(fetchGithub.fulfilled, (s, a) => { s.loading = false; s.data = a.payload; })
     .addCase(fetchGithub.rejected,  (s, a) => { s.loading = false; s.error = a.payload; });
  },
});
export default s.reducer;