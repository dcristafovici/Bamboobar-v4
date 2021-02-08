import categoriesReducer from  './categoriesReducer'
import asideReducer from "./asideReducer";
import addressReducer from './addressReducer'
import authReducer from "./authReducer"
import modalReducer from "./modalReducer";
import orderReducer from './orderReducer'
import productsReducer from "./productsReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  categoriesReducer,
  asideReducer,
  authReducer,
  addressReducer,
  modalReducer,
  orderReducer,
  productsReducer
})

export default rootReducer
