import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";


export const addDoctor = createAsyncThunk(
  "addDoctor/addDoctor",
  async (doctorData, thunkAPI) => {
    try {
      const atoken = localStorage.getItem('token');
      if (!atoken) {
        return thunkAPI.rejectWithValue({ error: "No token found" });
      }
      const response = await api.post("/admin/add-Doctor", doctorData, {
        headers: {
          "Content-Type": "multipart/form-data",
       Authorization : `Bearer ${atoken}`,
        },
      });
      return response.data;
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
