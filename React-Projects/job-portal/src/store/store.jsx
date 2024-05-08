import { configureStore } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

const jobDescriptionSlice = createSlice({
  name: "jobDescription",
  initialState: {
    buttonStatus: "apply-button",
    buttonText: "Apply Now",
  },
  reducers: {
    setButtonStatus: (state, action) => {
      state.buttonStatus = "appliedButton";
    },
    setButtonText: (state, action) => {
      state.buttonText = "Applied";
    },
  },
});

export const { setButtonStatus, setButtonText } = jobDescriptionSlice.actions;

const store = configureStore({ reducer: jobDescriptionSlice.reducer });

export default store;
