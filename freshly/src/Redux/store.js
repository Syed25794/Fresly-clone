import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import {reducer} from './Auth/reducer'
import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as appReducer } from "./AppReducer/reducer";
import { reducer as dateReducer } from "./DateDeliveryReducer/reducer";
const rootReducer = combineReducers({
  authReducer: authReducer,
  Auth:reducer,
  appReducer: appReducer,
  dateReducer: dateReducer,
});

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();
export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
