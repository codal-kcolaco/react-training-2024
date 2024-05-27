import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MyApplication } from "../components/MyApplications/ApplicationModel";

interface UserTypeState {
  userType: string | null;
  myApplication: MyApplication | null;
}

const initialState: UserTypeState = {
  userType: localStorage.getItem("userType"),
  myApplication: null,
};

const userTypeSlice = createSlice({
  name: "userTypeSlice",
  initialState,
  reducers: {
    setUserType: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.userType = action.payload;
      localStorage.setItem("userType", action.payload);
    },
    setMyApplication: (state, action: PayloadAction<any>) => {
      state.myApplication = action.payload;
    },
  },
});

export const { setUserType, setMyApplication } = userTypeSlice.actions;

const store = configureStore({ reducer: userTypeSlice.reducer });

export type RootState = ReturnType<typeof store.getState>;

export default store;
