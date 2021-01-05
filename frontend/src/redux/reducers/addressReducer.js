import {SET_USER_ADDRESS, CLEAR_USER_ADDRESS} from "../actions/actions-types/address-reducer"
import {loadState} from '../../localStorage'
const addressInitial = loadState()
const initialState = {
  address: addressInitial.address.address || '',
  distance: addressInitial.address.distance || null,
  moscowCity: addressInitial.address.moscowCity || false,
  minPrice: addressInitial.address.minPrice || null,
  notDelivery: addressInitial.address.notDelivery || false,
}
export default function addressReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_ADDRESS:
      let minPrice = 0;
      let moscowCity=  false
      let notDelivery = false
      if(action.payload.distance < 0.6){
        minPrice = 1500
        moscowCity = true
      } else if(action.payload.distance < 10){
        minPrice = 5000
      } else if(action.payload.distance < 30){
        minPrice= 10000
      } else{
        notDelivery = true
        return {
          ...state,
          address: '',
          distance: null,
          moscowCity: false,
          minPrice: null
        }
      }
       return {
        ...state,
        address: action.payload.address,
        distance: action.payload.distance,
        minPrice,
        moscowCity,
        notDelivery,
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
