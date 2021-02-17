import {SET_ADDRESS, CLEAR_ADDRESS, SET_PICKUP, SET_TAXI_INFO} from '../actions/actions-types/address-actions'
import {loadState} from "../../localStorage";

const localStorage = loadState()
const initialState = {
  location: localStorage ? localStorage.address.location : "",
  time: localStorage ? localStorage.address.time : "",
  minCount: localStorage ? localStorage.address.minCount : "",
  sale: localStorage ? localStorage.address.sale : false,
  withoutPayDelivery: localStorage ? localStorage.address.withoutPayDelivery : "",
  useTaxi: localStorage ? localStorage.address.useTaxi : false,
  locationCoords: localStorage ? localStorage.address.locationCoords : [],
  bambooCoords : [55.746697, 37.539020],
  pickup: false,
  taxiPrice: 0,
  taxiDistance: 0
}

export default function addressReducer(state = initialState, action){
  switch (action.type){
    case SET_ADDRESS:
      return {
        ...state,
        location: action.payload.location,
        time: action.payload.data.time,
        minCount: action.payload.data.min,
        sale: action.payload.data.sale,
        useTaxi: action.payload.data.useTaxi,
        withoutPayDelivery: action.payload.data.withoutPayDelivery,
        locationCoords: action.payload.coords,
        pickup: false
      }
    case CLEAR_ADDRESS:
      return{
        ...state,
        location: "",
        time: "",
        minCount: "",
        sale: false,
        useTaxi: false,
        withoutPayDelivery: "",
        locationCoords: []
      }
    case SET_PICKUP:
      return{
        ...state,
        location: "",
        time: "60 мин",
        minCount: "2500",
        sale: false,
        withoutPayDelivery: "2500",
        useTaxi: false,
        locationCoords:  [],
        pickup: true,
      }
    case SET_TAXI_INFO:
      return{
        ...state,
        taxiPrice: action.payload.taxiPrice,
        taxiDistance: action.payload.taxiDistance
      }
    default:
      return state
  }
}
