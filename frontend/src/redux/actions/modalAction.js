import {OPEN_REGISTER, CLOSE_REGISTER, OPEN_LOGIN, CLOSE_LOGIN} from './actions-types/modal-action'

export function openRegister(){
  return{
    type: OPEN_REGISTER,
  }
}

export function closeRegister(){
  return{
    type: CLOSE_REGISTER,
  }
}

export function openLogin(){
  return{
    type: OPEN_LOGIN,
  }
}

export function closeLogin(){
  return{
    type: CLOSE_LOGIN,
  }
}
