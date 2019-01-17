import { combineReducers } from "redux";

import mainStateReducer from "./reducers/mainStateReducer";
import authReducer from "./reducers/authReducer";
import adminReducer from "./reducers/adminReducer";

export default combineReducers({
  mainState: mainStateReducer,
  auth: authReducer,
  admin: adminReducer
});
