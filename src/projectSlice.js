import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProjects } from "../api";

export const fetchProjects = createAsyncThunk("projects/fetchAll",
  async (_, { rejectWithValue }) => {
    try { return await getProjects(); }
    catch (e) { return rejectWithValue(e.message); }
  }
);

const s = createSlice({
  name: "projects",
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchProjects.pending,   (s) => { s.loading = true;  s.error = null; })
     .addCase(fetchProjects.fulfilled, (s, a) => { s.loading = false; s.data = a.payload; })
     .addCase(fetchProjects.rejected,  (s, a) => { s.loading = false; s.error = a.payload; });
  },
});
export default s.reducer;