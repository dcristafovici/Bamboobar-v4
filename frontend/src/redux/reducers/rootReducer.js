import categoriesReducer from  './categoriesReducer'
import productsReducer from "./productsReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  productsReducer,
  categoriesReducer
})

export default rootReducer
