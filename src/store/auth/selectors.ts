import { AppState } from '@/store';

export const selectAuthLoading = (state: AppState) => state.userAuth.loading;

export const selectLoggedIn = (state: AppState) =>
  state.userAuth.token !== undefined;
