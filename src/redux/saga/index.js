import {fork} from 'redux-saga/effects';

import {
  loginRequest,
  logoutRequest,
  signupRequest,
} from './auth-saga/auth-saga';
import {
  getFaqsRequest,
  getVideoURLRequest,
  saveProfileRequest,
  getProfileDataRequest,
} from './profile-sega/profile-sega';
import {getStoresRequest, getAllOrder} from './order-saga/order-saga';

export function* rootSaga() {
  yield fork(loginRequest);
  yield fork(signupRequest);
  yield fork(getFaqsRequest);
  yield fork(getVideoURLRequest);
  yield fork(getStoresRequest);
  yield fork(logoutRequest);
  yield fork(saveProfileRequest);
  yield fork(getProfileDataRequest);
  yield fork(getAllOrder);
}
