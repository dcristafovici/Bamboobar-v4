import asideReducer from "./asideReducer"
import authReducer from "./authReducer"
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  asideReducer,
  authReducer
})

export default rootReducer
