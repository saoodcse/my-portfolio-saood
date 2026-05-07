import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getServices } from "./api";

export const fetchServices = createAsyncThunk("services/fetchAll",
  async (_, { rejectWithValue }) => {
    try { return await getServices(); }
    catch (e) { return rejectWithValue(e.message); }
  }
);

const s = createSlice({
  name: "services",
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchServices.pending,   (s) => { s.loading = true;  s.error = null; })
     .addCase(fetchServices.fulfilled, (s, a) => { s.loading = false; s.data = a.payload; })
     .addCase(fetchServices.rejected,  (s, a) => { s.loading = false; s.error = a.payload; });
  },
});
export default s.reducer;