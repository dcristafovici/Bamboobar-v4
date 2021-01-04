import {SET_USER_ADDRESS, CLEAR_USER_ADDRESS} from "./actions-types/address-reducer"
export function setUserAddress(address, distance) {
  return{
    type: SET_USER_ADDRESS,
    payload: {
      address,
      distance
    }
  }
}

export function clearUserAddress() {
  return{
    type: CLEAR_USER_ADDRESS,
    payload: {
      address: '',
      distance: null
    }
  }
}
