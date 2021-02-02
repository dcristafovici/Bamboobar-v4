import {ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAIL} from '../actions/actions-types/order-actions'
const initialState = {
  orders: [],
  loading: false
}

export default function orderReducer(state = initialState, action){
  switch (action.type){
    case ORDER_REQUEST:
      return {
        ...state,
        orders: [],
        loading: true
      }
    case ORDER_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        loading: false
      }
    case ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state

  }
}
