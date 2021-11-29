import {put, takeLatest} from 'redux-saga/effects';
import * as types from '../../types';
import {axios, get, post} from '../../../services/apiCalls';
import {AUTH_CONST, NEW_AUTH_CONST} from '../../../utils/routes';
import {responseValidator} from '../../../utils';

export function* loginRequest() {
  yield takeLatest(types.LOGIN_REQUEST_REQUEST, login);
}
function* login(params) {
  try {
    console.log('Valid Phone number', params?.params?.phone);

    let response = yield get(
      `${AUTH_CONST}exists?phoneNumber=${params?.params?.phone}`,
    );
    const phoneprefix = params?.params?.phone?.replace('%2B', '+');

    const responseData = {
      phone: phoneprefix,
      firebaseRes: params?.params?.firebaseRes,
      is_valid_user: response?.data,
    };
    yield put({
      type: types.LOGIN_REQUEST_SUCCESS,
      payload: responseData,
    });
    params.cbSuccess(response);
  } catch (error) {
    console.log('[error response]', error?.response);
    yield put({
      type: types.LOGIN_REQUEST_FAILURE,
      payload: null,
    });
    let status = JSON.stringify(error?.message);
    let msg = error?.response?.data?.message;
    responseValidator(status, msg);
    params.cbFailure(error);
  }
}

//Sign Up Api Handler

export function* signupRequest() {
  yield takeLatest(types.SIGNUP_REQUEST, signup);
}

function* signup(params) {
  console.log('Sign Up Sega Params', params?.params);
  try {
    let response = yield post(`${NEW_AUTH_CONST}authenticate`, params?.params);
    yield put({
      type: types.SIGNUP_SUCCESS,
      payload: response?.data,
    });
    params.cbSuccess(response?.data);
  } catch (error) {
    yield put({
      type: types.SIGNUP_FAILURE,
      payload: null,
    });
    let status = JSON.stringify(error.message);
    let msg = error?.response?.data?.message;
    responseValidator(status, msg);
    params.cbFailure(error);
  }
}

export function* logoutRequest() {
  yield takeLatest(types.LOGOUT_REQUEST_REQUEST, logout);
}

function* logout(params) {
  try {
    // let response = yield post(`${NEW_AUTH_CONST}authenticate`, params?.params);

    // console.log('Sign Up Success Sega',response.data);
    yield put({
      type: types.LOGOUT_REQUEST_SUCCESS,
    });
    params.cbSuccess();
  } catch (error) {
    yield put({
      type: types.LOGOUT_REQUEST_FAILURE,
    });
    // let status = JSON.stringify(error.message);
    // let msg = error.response.data.message;
    // responseValidator(status, msg);
    params.cbFailure();
  }
}
