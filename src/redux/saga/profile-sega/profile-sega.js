import {put, takeLatest} from 'redux-saga/effects';
import * as types from '../../types';
import {axios, get, post} from '../../../services/apiCalls';
import {
  baseURL,
  FAQ_CONST,
  CONFIG_CONST,
  NEW_AUTH_CONST,
} from '../../../utils/routes';
import {responseValidator} from '../../../utils';
//Get Faq request
export function* getFaqsRequest() {
  yield takeLatest(types.GET_FAQS_REQUEST_REQUEST, getFaqs);
}
//get faq action
function* getFaqs(params) {
  yield put({
    type: types.SET_PROFILE_LOADER,
  });
  try {
    let response = yield get(`${FAQ_CONST}`);
    yield put({
      type: types.GET_FAQS_REQUEST_SUCCESS,
      payload: response?.data,
    });
    params.cbSuccess(response?.data);
  } catch (error) {
    let status = JSON.stringify(error.message);
    let msg = error?.response?.data?.message;
    responseValidator(status, msg);
    yield put({
      type: types.GET_FAQS_REQUEST_FAILURE,
      payload: [],
    });
    params.cbFailure(error);
  }
}

//get video url request
export function* getVideoURLRequest() {
  yield takeLatest(types.GET_VIDEO_URL_REQUEST_REQUEST, getVideoURL);
}
//get video url action
function* getVideoURL(params) {
  yield put({
    type: types.SET_PROFILE_LOADER,
  });
  try {
    let response = yield get(`${CONFIG_CONST}`);
    yield put({
      type: types.GET_VIDEO_URL_REQUEST_SUCCESS,
      payload: response?.data,
    });
    params.cbSuccess(response?.data);
  } catch (error) {
    let status = JSON.stringify(error.message);
    let msg = error?.response?.data?.message;
    responseValidator(status, msg);
    yield put({
      type: types.GET_VIDEO_URL_REQUEST_FAILURE,
      payload: [],
    });
    params.cbFailure(error);
  }
}
//Get My Profile Data
export function* getProfileDataRequest() {
  yield takeLatest(types.GET_PROFILE_INFO_REQUEST_REQUEST, getProfileData);
}
//get profile data action
function* getProfileData(params) {
  yield put({
    type: types.SET_PROFILE_LOADER,
  });
  try {
    let myInfo = yield axios.get(`${baseURL + NEW_AUTH_CONST}me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${params?.params?.token}`,
      },
      timeout: 5000,
    });
    yield put({
      type: types.GET_PROFILE_INFO_SUCCESS,
      payload: myInfo?.data,
    });
    params.cbSuccess(myInfo?.data);
  } catch (error) {
    let status = JSON.stringify(error.message);
    let msg = error?.response?.data?.message;
    responseValidator(status, msg);
    yield put({
      type: types.GET_PROFILE_INFO_FAILURE,
      payload: null,
    });
    params.cbFailure(error);
  }
}
//save profile info  request
export function* saveProfileRequest() {
  yield takeLatest(types.SAVE_PROFILE_INFO_REQUEST_REQUEST, save_profile_info);
}
//save profile info  action
function* save_profile_info(params) {
  yield put({
    type: types.SET_PROFILE_LOADER,
  });
  const requestBody = {
    imageId: params?.params?.imageId,
    firstName: params?.params?.firstName,
    lastName: params?.params?.lastName,
    email: params?.params?.email,
    language: params?.params?.language,
    city: params?.params?.city,
    address: params?.params?.address,
  };
  try {
    let response = yield axios.patch(
      `${baseURL + NEW_AUTH_CONST}me`,
      requestBody,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${params?.params?.token}`,
        },
        timeout: 5000,
      },
    );
    yield put({
      type: types.SAVE_PROFILE_INFO_SUCCESS,
      payload: response?.data,
    });
    params.cbSuccess(response?.data);
  } catch (error) {
    yield put({
      type: types.SAVE_PROFILE_INFO_FAILURE,
      payload: null,
    });
    let status = JSON.stringify(error.message);
    let msg = error?.response?.data?.message;
    responseValidator(status, msg);
    params.cbFailure(error);
  }
}
