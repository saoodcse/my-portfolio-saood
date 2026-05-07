import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCertifications } from "./api";

export const fetchCerts = createAsyncThunk("certs/fetch",
  async (_, { rejectWithValue }) => {
    try { return await getCertifications(); }
    catch (e) { return rejectWithValue(e.message); }
  }
);

const s = createSlice({
  name: "certs",
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchCerts.pending,   (s) => { s.loading = true;  s.error = null; })
     .addCase(fetchCerts.fulfilled, (s, a) => { s.loading = false; s.data = a.payload; })
     .addCase(fetchCerts.rejected,  (s, a) => { s.loading = false; s.error = a.payload; });
  },
});
export default s.reducer;