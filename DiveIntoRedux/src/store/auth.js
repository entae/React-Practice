import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// Methods on the actions object will create action objects for us
// "action creators" = already have a type property with a unique identifier
export const authActions = authSlice.actions;

export default authSlice.reducer;
