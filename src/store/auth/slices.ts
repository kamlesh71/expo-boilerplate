import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState } from './types';

const initialState: AuthState = {
  loading: false,
  token: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | undefined>) => {
      state.token = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setToken, setLoading } = authSlice.actions;

export default authSlice.reducer;
