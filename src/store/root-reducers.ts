import themeReducer from './color-schema/slices';
import { COLOR_SCHEMA_SLICE, USER_AUTH_SLICE } from './constants';
import authReducer from './auth/slices';

const rootReducer = {
  [COLOR_SCHEMA_SLICE]: themeReducer,
  [USER_AUTH_SLICE]: authReducer,
};

export default rootReducer;
