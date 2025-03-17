import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const addDoctor = createAsyncThunk(
  "addDoctor/addDoctor",
  async (doctorData, thunkAPI) => {
    try {
      const response = await api.post("/doctor/addDoctor/", doctorData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data; // ✅ Fix: Axios handles JSON response automatically
    } catch (err) {
      return thunkAPI.rejectWithValue({
        error: err.response?.data?.message || err.message,
      });
    }
  }
);

const AddDoctorsSlice = createSlice({
  name: "addDoctor",
  initialState: {
    doctor: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addDoctor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.doctor = action.payload;
      })
      .addCase(addDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export const { resetDoctorState } = AddDoctorsSlice.actions;
export default AddDoctorsSlice.reducer;

// Compare this snippet from Backend/src/models/Doctor.js:
