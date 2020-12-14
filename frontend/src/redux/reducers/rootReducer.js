import categoriesReducer from  './categoriesReducer'
import asideReducer from "./asideReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  categoriesReducer,
  asideReducer
})

export default rootReducer
