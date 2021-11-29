import {put, takeLatest} from 'redux-saga/effects';
import * as types from '../../types';
import {axios, get, post} from '../../../services/apiCalls';
import {ORDER_CONST, STORE_CONST, baseURL} from '../../../utils/routes';
import {responseValidator} from '../../../utils';

// get stores request
export function* getStoresRequest() {
  yield takeLatest(types.GET_STORES_REQUEST, getStores);
}

// get stores action
function* getStores(params) {
  console.log('into orders saga');
  yield put({
    type: types.SET_ORDER_LOADER,
  });
  try {
    let response = yield get(`${STORE_CONST}`);
    yield put({
      type: types.GET_STORES_SUCCESS,
      payload: response?.data,
    });
    params.cbSuccess(response?.data);
  } catch (error) {
    let status = JSON.stringify(error?.message);
    let msg = error?.response?.data?.message;
    responseValidator(status, msg);
    yield put({
      type: types.GET_STORES_FAILURE,
      payload: [],
    });
    params.cbFailure(error);
  }
}

// get stores request
export function* getAllOrder() {
  yield takeLatest(types.GET_ORDERS_REQUEST, getOrders);
}

// get stores action
function* getOrders(params) {
  yield put({
    type: types.SET_ORDER_LOADER,
  });
  try {
    let response = yield axios.get(
      `${baseURL + ORDER_CONST}?page=${params?.params?.page}&limit=10`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${params?.params?.token}`,
        },
        timeout: 5000,
      },
    );

    if (response?.data) {
      const allOrders = {
        all_orders: response?.data?.results,
        type: params?.params?.reload,
      };
      yield put({
        type: types.GET_ORDERS_SUCCESS,
        payload: allOrders,
      });
      params.cbSuccess(response?.data?.results);
    }
  } catch (error) {
    let status = JSON.stringify(error?.message);
    let msg = error?.response?.data?.message;
    responseValidator(status, msg);
    yield put({
      type: types.GET_ORDERS_FAILURE,
      payload: [],
    });
    params.cbFailure(error);
  }
}
