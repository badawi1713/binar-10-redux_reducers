import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cardReducer from "./cardReducer";
import navbarReducer from "./navbarReducer";
// Reducer adalah fungsi yang me-return state;

const rootReducer = combineReducers({
  cardReducer,
  navbarReducer,
  authReducer,
});

export default rootReducer;
