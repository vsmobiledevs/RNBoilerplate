import {combineReducers} from 'redux';

import loginReducer from './auth-reducers/auth-reducer';

let rootReducer;
export default rootReducer = combineReducers(
  Object.assign({
    login: loginReducer,
  }),
);
