import {OPEN_REGISTER, CLOSE_REGISTER, OPEN_LOGIN, CLOSE_LOGIN} from '../actions/actions-types/modal-action'
const initialState = {
  registerModal: false,
  loginModal: false,
  orderModal: false,
}

export default function modalReducer(state = initialState, action){
  switch (action.type){
    case OPEN_REGISTER:
      return {...state, registerModal: true}
    case CLOSE_REGISTER:
      return {...state, registerModal: false}
    case OPEN_LOGIN:
      return {...state, loginModal: true}
    case CLOSE_LOGIN:
      return {...state, loginModal: false}
    default:
      return state
  }
}
