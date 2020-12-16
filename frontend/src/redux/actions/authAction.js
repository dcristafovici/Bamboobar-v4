import {SET_USER_DATA, CLEAR_USER_DATA} from "./actions-types/auth-actions"

export function setUserData(token, user) {
  return{
    type: SET_USER_DATA,
    payload: {
      token,
      user
    }
  }
}


export function clearUserData() {
  return{
    type: CLEAR_USER_DATA,
  }
}
