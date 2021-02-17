import categoriesReducer from  './categoriesReducer'
import asideReducer from "./asideReducer";
import authReducer from "./authReducer"
import modalReducer from "./modalReducer";
import orderReducer from './orderReducer'
import productsReducer from "./productsReducer";
import addressReducer from "./addressReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  categoriesReducer,
  asideReducer,
  authReducer,
  modalReducer,
  orderReducer,
  productsReducer,
  addressReducer
})

export default rootReducer
