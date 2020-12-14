import {ADD_TO_CART, UPDATE_CART_QUANTITY, REMOVE_FROM_CART} from '../actions/actions-types/aside-actions'
const initialState = {
  cart: []
}

export default function asideReducer(state = initialState, action) {
  let cart = state.cart
  switch (action.type) {
    case ADD_TO_CART:
      let itemInCart = cart.find(item => item.product._id == action.payload.product._id)
      if(itemInCart)
      {
        let newQuantity = itemInCart.quantity;
        newQuantity++;
        return {
          ...state,
          cart: [{...itemInCart, quantity: newQuantity}]

        }
      } else{
        return {
          ...state,
          cart: [...state.cart, action.payload]
        }
      }
    default:
      return state
  }
}
