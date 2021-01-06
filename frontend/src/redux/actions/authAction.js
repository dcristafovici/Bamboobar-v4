import {SET_USER_DATA, CLEAR_USER_DATA} from "./actions-types/auth-actions"

export function setUserData(user) {
  return{
    type: SET_USER_DATA,
    payload: {
      user
    }
  }
}


export function clearUserData() {
  return{
    type: CLEAR_USER_DATA,
  }
}
