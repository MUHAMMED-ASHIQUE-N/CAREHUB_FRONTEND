import { createSlice } from "@reduxjs/toolkit";
import { DoctorsData } from "../../Constants/DoctorsData";

const initialState = {
  doctors: DoctorsData,
  filteredDoctors: DoctorsData,
  searchQuery: "",
  selectedSpecialty: "all",
  showSpecialtyFilter: false,
};

const doctorsSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      doctorsSlice.caseReducers.applyFilters(state);
    },

    setSelectedSpecialty: (state, action) => {
      state.selectedSpecialty = action.payload;
      state.showSpecialtyFilter = false;
      doctorsSlice.caseReducers.applyFilters(state);
    },

    toggleSpecialtyFilter: (state) => {
      state.showSpecialtyFilter = !state.showSpecialtyFilter;
    },

    applyFilters: (state) => {
      let filtered = DoctorsData;

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
    },
  },
});

export const {
  setSearchQuery,
  setSelectedSpecialty,
  toggleSpecialtyFilter,
} = doctorsSlice.actions;

export default doctorsSlice.reducer;
