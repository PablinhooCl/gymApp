import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, getUserInfo } from './authActions';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  logout: (state) => {
    state.isAuthenticated = false;
    state.user = null;
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export const { logout, login } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
