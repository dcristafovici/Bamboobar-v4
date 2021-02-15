import {SET_USER_ADDRESS, CLEAR_USER_ADDRESS, TOGGLE_POPUP} from "./actions-types/address-reducer"

export const setUserAddress = (address, data, coords) => (dispatch) => {
  dispatch({
    type: SET_USER_ADDRESS,
    payload: {
      address,
      data,
      coords
    }
  })
}

export const clearUserAddress = () => (dispatch) => {
  dispatch({
    type: CLEAR_USER_ADDRESS,
  })
}

export const togglePopup = (data) => (dispatch) => {
  dispatch({
    type: TOGGLE_POPUP
  })
}
