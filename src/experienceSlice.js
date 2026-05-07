import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getExperience } from "./api";

export const fetchExperience = createAsyncThunk("experience/fetchAll",
  async (_, { rejectWithValue }) => {
    try { return await getExperience(); }
    catch (e) { return rejectWithValue(e.message); }
  }
);

const s = createSlice({
  name: "experience",
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchExperience.pending,   (s) => { s.loading = true;  s.error = null; })
     .addCase(fetchExperience.fulfilled, (s, a) => { s.loading = false; s.data = a.payload; })
     .addCase(fetchExperience.rejected,  (s, a) => { s.loading = false; s.error = a.payload; });
  },
});
export default s.reducer;