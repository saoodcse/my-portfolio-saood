import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProjects } from "./api";

export const fetchProjects = createAsyncThunk(
  "projects/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getProjects();
      return data;
    } catch (err) {
      return rejectWithValue(err.message || "Failed to fetch projects");
    }
  }
);

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default projectSlice.reducer;