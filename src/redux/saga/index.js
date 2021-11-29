import {fork} from 'redux-saga/effects';

import {
  loginRequest,
  logoutRequest,
  signupRequest,
} from './auth-saga/auth-saga';

export function* rootSaga() {
  yield fork(loginRequest);
  yield fork(signupRequest);
  yield fork(logoutRequest);
}
