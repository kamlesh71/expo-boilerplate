import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ColorSchemaState } from './types';
import { COLOR_SCHEMA_SLICE } from '@/store/constants';
import { Appearance } from 'react-native';

const initialState: ColorSchemaState = {
  schema: 'light',
  usingSystemSchema: true,
};

const colorSchemaSlice = createSlice({
  name: COLOR_SCHEMA_SLICE,
  initialState: initialState,
  reducers: {
    setDarkSchema: state => {
      state.schema = 'dark';
      state.usingSystemSchema = false;
    },
    setLightSchema: state => {
      state.schema = 'light';
      state.usingSystemSchema = false;
    },
    setSystemSchema: state => {
      state.usingSystemSchema = true;
      state.schema = Appearance.getColorScheme();
    },
    setColorSchema: (
      state,
      action: PayloadAction<ColorSchemaState['schema']>,
    ) => {
      state.schema = action.payload;
    },
  },
});

export const {
  setDarkSchema,
  setLightSchema,
  setColorSchema,
  setSystemSchema,
} = colorSchemaSlice.actions;

export default colorSchemaSlice.reducer;
