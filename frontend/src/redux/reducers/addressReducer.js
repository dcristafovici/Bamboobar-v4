import {SET_USER_ADDRESS, CLEAR_USER_ADDRESS} from "../actions/actions-types/address-reducer"
import {loadState} from '../../localStorage'
const addressInitial = loadState()
const distanceInitial = loadState()
const initialState = {
  address: addressInitial.address.address || '',
  distance: distanceInitial.address.distance || null,
}
export default function addressReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_ADDRESS:
      return {
        ...state,
        address: action.payload.address,
        distance: action.payload.distance
      }
    case CLEAR_USER_ADDRESS :
      return{
        ...state,
        address: '',
        distance: null
      }
    default:
      return state
  }
}
