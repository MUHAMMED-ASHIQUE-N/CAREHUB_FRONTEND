import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getDoctors = createAsyncThunk(
  "doctors/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("doctor/getDoctor/");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const doctorsSlice = createSlice({
  name: "doctors",
  initialState: {
    doctors: [],
    filteredDoctors: [],
    searchQuery: "",
    selectedSpecialty: "all",
    showSpecialtyFilter: false,
    loading: false,
    error: null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      applyFilters(state); // ✅ Correct way to apply filters
    },

    setSelectedSpecialty: (state, action) => {
      state.selectedSpecialty = action.payload;
      state.showSpecialtyFilter = false;
      applyFilters(state); // ✅ Correct way to apply filters
    },

    toggleSpecialtyFilter: (state) => {
      state.showSpecialtyFilter = !state.showSpecialtyFilter;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload;
        applyFilters(state); // ✅ Correct way to apply filters
      })
      .addCase(getDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// ✅ Move applyFilters outside of `reducers` and `extraReducers`
const applyFilters = (state) => {
  let filtered = state.doctors; // Use API-fetched doctors

  if (state.selectedSpecialty !== "all") {
    filtered = filtered.filter(
      (doctor) =>
        doctor.speciality.toLowerCase() === state.selectedSpecialty.toLowerCase()
    );
  }

  if (state.searchQuery) {
    const lowerCaseSearch = state.searchQuery.toLowerCase();
    filtered = filtered.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(lowerCaseSearch) ||
        doctor.speciality.toLowerCase().includes(lowerCaseSearch)
    );
  }

  state.filteredDoctors = filtered;
};

export const { setSearchQuery, setSelectedSpecialty, toggleSpecialtyFilter } =
  doctorsSlice.actions;

export default doctorsSlice.reducer;
