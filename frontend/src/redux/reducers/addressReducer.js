import {SET_USER_ADDRESS, CLEAR_USER_ADDRESS, TOGGLE_POPUP} from "../actions/actions-types/address-reducer"
import {loadState} from '../../localStorage'
const addressInitial = loadState()
const initialState = {
  address: addressInitial.address.address || '',
  distance: addressInitial.address.distance || null,
  moscowCity: addressInitial.address.moscowCity || false,
  minPrice: addressInitial.address.minPrice || null,
  delivery: addressInitial.address.delivery || false,
  popup: false
}
export default function addressReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_ADDRESS:
      let minPrice = 0;
      let moscowCity=  false
      let delivery = true
      if(action.payload.distance < 0.6){
        minPrice = 1500
        moscowCity = true
      } else if(action.payload.distance < 10){
        minPrice = 5000
      } else if(action.payload.distance < 30){
        minPrice= 10000
      } else{
        delivery = false
        return {
          ...state,
          address: '',
          distance: null,
          moscowCity: false,
          minPrice: null,
          delivery,
          popup: true
        }
      }

      return {
        ...state,
        address: action.payload.address,
        distance: action.payload.distance,
        minPrice,
        moscowCity,
        delivery
      }
    case CLEAR_USER_ADDRESS :
      return{
        ...state,
        address: '',
        distance: null,
        delivery: false,
        moscowCity: false,
        minPrice: null
      }
    case TOGGLE_POPUP:
      return {
        ...state,
        popup: !state.popup
      }

    default:
      return state
  }
}
