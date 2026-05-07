import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSkills } from "./api";

export const fetchSkills = createAsyncThunk("skills/fetchAll",
  async (_, { rejectWithValue }) => {
    try { return await getSkills(); }
    catch (e) { return rejectWithValue(e.message); }
  }
);

const s = createSlice({
  name: "skills",
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchSkills.pending,   (s) => { s.loading = true;  s.error = null; })
     .addCase(fetchSkills.fulfilled, (s, a) => { s.loading = false; s.data = a.payload; })
     .addCase(fetchSkills.rejected,  (s, a) => { s.loading = false; s.error = a.payload; });
  },
});
export default s.reducer;