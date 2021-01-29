import categoriesReducer from  './categoriesReducer'
import asideReducer from "./asideReducer";
import addressReducer from './addressReducer'
import authReducer from "./authReducer"
import modalReducer from "./modalReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  categoriesReducer,
  asideReducer,
  authReducer,
  addressReducer,
  modalReducer
})

export default rootReducer
