import {
  combineReducers,
  legacy_createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./Auth/reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose();

const rootReducer = combineReducers({
  Auth: reducer,
});
const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export { store };
