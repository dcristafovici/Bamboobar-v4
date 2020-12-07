import asideReducer from "./asideReducer"
import categoriesReducer from  './categoriesReducer'
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  asideReducer,
  categoriesReducer
})

export default rootReducer
