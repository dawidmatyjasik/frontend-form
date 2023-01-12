import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: object | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: () => initialState,
    login: (state, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
    },
  },
});

export const { logout, login } = authSlice.actions;

export default authSlice.reducer;
