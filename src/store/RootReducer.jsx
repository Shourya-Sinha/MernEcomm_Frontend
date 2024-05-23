// import { combineReducers } from "redux";
// import storage from 'redux-persist/lib/storage';

// import authReducer from './slice/auth';


// const rootPersistConfig ={
//     key:'root',
//     storage,
//     keyPrefix: 'redux-',
//   whitelist: ['auth'],
// };

// const rootReducer = combineReducers({
//     auth:authReducer,
// });

// export {rootPersistConfig, rootReducer};
// src/RootReducer.js
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';

import authReducer from './slice/auth';
import cartReducer from './slice/cartslice';

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['auth', 'cart'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

export { rootPersistConfig, rootReducer };
