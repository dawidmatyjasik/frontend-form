import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: object | null;
}

const initialState: AuthState = {
  user: null,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
    login: (state, action: PayloadAction<AuthState>) => {
      state.user = action.payload;
    },
  },
});

export const { logout, login } = auth.actions;

export default auth.reducer;
