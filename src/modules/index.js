import { combineReducers } from "redux";

import auth from "./auth";
import profile from "./profile";

import mainStateReducer from "../store/reducers/mainStateReducer";
import authReducer from "../store/reducers/authReducer";
import adminReducer from "../store/reducers/adminReducer";

export default combineReducers({
  auth,
  profile,
  mainState: mainStateReducer,
  // auth: authReducer,
  admin: adminReducer
});
