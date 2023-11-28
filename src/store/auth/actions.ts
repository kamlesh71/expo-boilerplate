import { USER_AUTH_SLICE } from '@/store/constants';
import { createAction } from '@reduxjs/toolkit';

export const loginSagaAction = createAction<{
  email: string;
  password: string;
}>(`${USER_AUTH_SLICE}/saga/login`);

export const registerSagaAction = createAction<{
  name: string;
  email: string;
  password: string;
}>(`${USER_AUTH_SLICE}/saga/register`);
