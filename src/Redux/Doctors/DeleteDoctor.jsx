import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { getDoctors } from "../DoctotFilter/doctorsSlice"; // Ensure you have this in place

export const deleteDoctor = createAsyncThunk(
  "doctor/deleteDoctor",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.delete(`/doctor/${id}`);
      console.log("Doctor deleted successfully:", response.data);
      
      // Fetch the updated list after deletion
      dispatch(getDoctors());
      
      return response.data;
    } catch (error) {
      console.error("Error deleting doctor:", error);
      return rejectWithValue(error.response?.data || "Failed to delete doctor");
    }
  }
);

const doctorDeleteSlice = createSlice({
  name: "doctorDelete",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetDeleteState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteDoctor.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(deleteDoctor.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(deleteDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetDeleteState } = doctorDeleteSlice.actions;
export default doctorDeleteSlice.reducer;
