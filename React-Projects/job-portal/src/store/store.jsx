import { configureStore } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

const userTypeSlice = createSlice({
  name: "userTypeSlice",
  initialState: {
    userType: localStorage.getItem("userType"),
  },
  reducers: {
    setUserType: (state, action) => {
      console.log(action.payload);
      localStorage.setItem("userType", action.payload);
    },
  },
});

export const { setUserType } = userTypeSlice.actions;

const store = configureStore({ reducer: userTypeSlice.reducer });

export default store;
