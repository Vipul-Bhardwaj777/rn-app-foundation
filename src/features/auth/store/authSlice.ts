import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AuthState, UserData } from '../types/authTypes';

const initialState: AuthState = {
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<UserData>) {
      state.userData = action.payload;
    },
    logout(state) {
      state.userData = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
