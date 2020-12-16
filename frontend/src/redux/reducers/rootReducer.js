import categoriesReducer from  './categoriesReducer'
import asideReducer from "./asideReducer";
import authReducer  from "./authReducer"
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  categoriesReducer,
  asideReducer,
  authReducer
})

export default rootReducer
