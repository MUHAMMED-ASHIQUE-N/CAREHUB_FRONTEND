import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

// ✅ Async thunk for updating doctor details
export const updateDoctor = createAsyncThunk(
  "doctor/updateDoctor",
  async ({ id, updatedData }, thunkAPI) => {
    try {
      const response = await api.put(`/doctor/${id}`, updatedData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }) 
      
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const doctorUpdateSlice = createSlice({
  name: "doctorUpdate",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetUpdateState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateDoctor.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(updateDoctor.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetUpdateState } = doctorUpdateSlice.actions;
export default doctorUpdateSlice.reducer;
