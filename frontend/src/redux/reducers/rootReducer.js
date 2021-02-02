import categoriesReducer from  './categoriesReducer'
import asideReducer from "./asideReducer";
import addressReducer from './addressReducer'
import authReducer from "./authReducer"
import modalReducer from "./modalReducer";
import orderReducer from './orderReducer'
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  categoriesReducer,
  asideReducer,
  authReducer,
  addressReducer,
  modalReducer,
  orderReducer
})

export default rootReducer
