import * as TYPES from '../../types';

export const getStoresRequest = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_STORES_REQUEST,
    cbSuccess,
    cbFailure,
  };
};

export const getOrderRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_ORDERS_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
