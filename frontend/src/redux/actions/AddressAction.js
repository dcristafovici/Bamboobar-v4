import {SET_ADDRESS, CLEAR_ADDRESS, SET_PICKUP, SET_TAXI_INFO} from '../actions/actions-types/address-actions'

export const setAddress = (location, data, coords) => (dispatch) => {
  dispatch({
    type: SET_ADDRESS,
    payload: {
      location,
      data,
      coords
    }
  })
}


export const clearAddress = () => dispatch => {
  dispatch({
    type: CLEAR_ADDRESS
  })
}


export function setPickup() {
  return {
    type: SET_PICKUP
  }
}


export const setTaxiInfo = (taxiPrice, taxiDistance) => dispatch => {
  dispatch({
    type: SET_TAXI_INFO,
    payload: {
      taxiPrice,
      taxiDistance
    }
  })
}
