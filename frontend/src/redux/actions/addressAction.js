import {
  SET_USER_ADDRESS,
  CLEAR_USER_ADDRESS,
  TOGGLE_POPUP,
  SET_TAXI_INFO,
  DELIVERY_ON,
  DELIVERY_OFF,
  PICKUP_ON
} from "./actions-types/address-reducer"

export const setUserAddress = (address, data, coords, distance, price) => (dispatch) => {
  dispatch({
    type: SET_USER_ADDRESS,
    payload: {
      address,
      data,
      coords,
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


export const setTaxiInfo = (taxiDistance, taxiPrice) => (dispatch) => {
  dispatch({
    type: SET_TAXI_INFO,
    payload: {
      taxiDistance,
      taxiPrice
    }
  })
}


export const deliveryON = () => (dispatch) => {
  dispatch({
    type: DELIVERY_ON
  })
}

export const deliveryOFF = () => (dispatch) => {
  dispatch({
    type: DELIVERY_OFF
  })
}


export const pickup = () => (dispatch) => {
  dispatch({
    type: PICKUP_ON
  })
}
