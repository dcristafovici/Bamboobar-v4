import {combineReducers} from "redux";
import asideReducer from "./aside";

export default combineReducers({
  aside: asideReducer
})
