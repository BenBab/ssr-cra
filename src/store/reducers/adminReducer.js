import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  loading: false,
  error: null,
  pageUpdateToast: null,
  routes: null
};

const updatePageStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null
  });
};

const updatePageSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: null,
    pageUpdateToast: "Your page was succefully updated"
  });
};

const updatePageFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error.message
  });
};

const resetToast = (state, action) => {
  return updateObject(state, {
    pageUpdateToast: null
  });
};

const storeRoutes = (state, action) => {
  return updateObject(state, {
    routes: action.routes
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PAGE_START:
      return updatePageStart(state, action);
    case actionTypes.UPDATE_PAGE_SUCCESS:
      return updatePageSuccess(state, action);
    case actionTypes.UPDATE_PAGE_FAIL:
      return updatePageFail(state, action);
    case actionTypes.RESET_UPDATE_TOAST:
      return resetToast(state, action);
    case actionTypes.STORE_PAGE_ROUTES:
      return storeRoutes(state, action);
    default:
      return state;
  }
};

export default reducer;
