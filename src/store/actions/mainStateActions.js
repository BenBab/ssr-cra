import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setDataStore = data => {
  return {
    type: actionTypes.SETDATA,
    data: data
  };
};

export const initWebsiteState = () => {
  const siteName = process.env.REACT_APP_SITENAME;

  const URL = `https://react-boiler-5ecbd.firebaseio.com/${siteName}/site.json`;

  return dispatch => {
    axios
      .get(URL)
      .then(response => {
        console.log("redux initial response", response);
        dispatch(setDataStore(response.data));
      })
      .catch(error => {
        console.log(error);
        // dispatch(fetchIngredientsFailed());
      });
  };
};

export const changePageState_Start = () => {
  return {
    type: actionTypes.CHECK_STATE_BACKUP
  };
};

export const changePageState_update = (eventTarget, key, parent) => {
  console.log("action", eventTarget, key, parent);
  return {
    type: actionTypes.CHANGE_PAGE_DATA,
    eventTarget,
    id: key,
    parentId: parent
  };
};

export const revertStateChange = () => {
  return {
    type: actionTypes.REVERT_STATE_CHANGE
  };
};

export const changePageState = (eventTarget, key, parent) => {
  return dispatch => {
    dispatch(changePageState_Start());
    dispatch(changePageState_update(eventTarget, key, parent));
  };
};
