import { all, fork } from 'redux-saga/effects';
import { authSagas } from './auth/sagas';

const rootSaga = function* () {
  yield all([
    fork(authSagas),
    // Other forks
  ]);
};

export default rootSaga;
