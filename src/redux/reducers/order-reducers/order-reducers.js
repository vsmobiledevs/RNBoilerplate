import * as TYPES from '../../types';

const initialState = {
  error: null,
  loading: false,
  isSuccess: false,
  isFailure: false,
  stores: [],
  orders: [],
};

const orderReducers = (state = initialState, action = {}) => {
  const {type, payload} = action;
  switch (type) {
    case TYPES.GET_STORES_SUCCESS:
      return {
        ...state,
        loading: false,
        stores: payload,
      };
    case TYPES.GET_STORES_FAILURE:
      return {
        ...state,
        loading: false,
        stores: [],
      };
    case TYPES.GET_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: payload?.type
          ? payload.all_orders
          : [...state.orders, ...payload.all_orders],
      };
    case TYPES.GET_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        orders: [],
      };
    case TYPES.SET_ORDER_LOADER:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default orderReducers;
