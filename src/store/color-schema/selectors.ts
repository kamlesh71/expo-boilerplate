import { AppState } from '@/store';

export const selectActiveColorSchema = (state: AppState) =>
  state.colorSchema.schema;

export const selectUsingSystemSchema = (state: AppState) =>
  state.colorSchema.usingSystemSchema;
