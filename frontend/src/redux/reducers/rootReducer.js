import categoriesReducer from  './categoriesReducer'
import asideReducer from "./asideReducer";
import authReducer  from "./authReducer"
import addressReducer from './addressReducer'
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  categoriesReducer,
  asideReducer,
  authReducer,
  addressReducer
})

export default rootReducer
