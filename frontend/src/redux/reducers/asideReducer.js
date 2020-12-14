import {ADD_TO_CART, UPDATE_CART_QUANTITY, REMOVE_FROM_CART} from '../actions/actions-types/aside-actions'
const initialState = {
  cart: []
}

export default function asideReducer(state = initialState, action) {
  let cart = state.cart
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    default:
      return state
  }
}
