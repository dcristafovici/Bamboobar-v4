import {SET_USER_ADDRESS, CLEAR_USER_ADDRESS, TOGGLE_POPUP} from "../actions/actions-types/address-reducer"
import {loadState} from '../../localStorage'
const addressInitial = loadState()


const initialState = {
  address: addressInitial ? addressInitial.address.address : "",
  deliveryTime: addressInitial ? addressInitial.address.deliveryTime : "",
  deliveryMin: addressInitial ? addressInitial.address.deliveryMin : "",
  deliverySale: addressInitial ? addressInitial.address.deliverySale : "",
  deliveryPay: addressInitial ? addressInitial.address.deliveryPay : "",
  deliveryNotPay: addressInitial ? addressInitial.address.deliveryNotPay : "",
  popup: false
}

export default function addressReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_ADDRESS:
      return {
        ...state,
        address: action.payload.address,
        deliveryTime: action.payload.data.time,
        deliveryMin: action.payload.data.min,
        deliverySale: action.payload.data.sale,
        deliveryPay: action.payload.data.pay,
        deliveryNotPay: action.payload.data.notPay,
      }
    case CLEAR_USER_ADDRESS:
      return{
        ...state,
        address: "",
        deliveryTime: "",
        deliveryMin: '',
        deliverySale: false,
        deliveryPay: true,
        deliveryNotPay: 0,
        popup: false
      }
    case TOGGLE_POPUP:
      return {
        ...state,
        popup: !state.popup
      }
    default :
      return state
  }
}
