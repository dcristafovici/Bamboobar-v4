import {
  SET_USER_ADDRESS,
  CLEAR_USER_ADDRESS,
  TOGGLE_POPUP,
  SET_TAXI_INFO,
  DELIVERY_OFF,
  DELIVERY_ON
} from "../actions/actions-types/address-reducer"
import {loadState} from '../../localStorage'

const addressInitial = loadState()

const initialState = {
  address: addressInitial ? addressInitial.address.address : "",
  deliveryTime: addressInitial ? addressInitial.address.deliveryTime : "",
  deliveryMin: addressInitial ? addressInitial.address.deliveryMin : "",
  deliverySale: addressInitial ? addressInitial.address.deliverySale : "",
  deliveryPay: addressInitial ? addressInitial.address.deliveryPay : "",
  deliveryNotPay: addressInitial ? addressInitial.address.deliveryNotPay : "",
  addressCoords: addressInitial ? addressInitial.address.addressCoords : "",
  possibleDelivery: addressInitial ? addressInitial.address.possibleDelivery : "",
  bambooCoords: [55.746697, 37.539020],
  deliveryMode: false,
  taxiDistance: "",
  taxiPrice: "",
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
        possibleDelivery: action.payload.data.possible,
        addressCoords: action.payload.coords
      }
    case CLEAR_USER_ADDRESS:
      return {
        ...state,
        address: "",
        deliveryTime: "",
        deliveryMin: '',
        deliverySale: false,
        deliveryPay: true,
        deliveryNotPay: 0,
        addressCoords: "",
        possibleDelivery: false,
        popup: false
      }
    case DELIVERY_ON:
      return {
        ...state,
        deliveryMode: true
      }
    case DELIVERY_OFF:
      return {
        ...state,
        deliveryMode: false
      }
    case TOGGLE_POPUP:
      return {
        ...state,
        popup: !state.popup
      }
    case SET_TAXI_INFO:
      return {
        ...state,
        taxiDistance: action.payload.taxiDistance,
        taxiPrice: action.payload.taxiPrice
      }
    default :
      return state
  }
}
