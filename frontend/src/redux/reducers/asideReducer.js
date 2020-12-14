import {ADD_TO_CART, UPDATE_CART_QUANTITY, REMOVE_FROM_CART} from '../actions/actions-types/aside-actions'
const initialState = {
  cart: [
    {product:{name: "Test"} , quantity: 2},
    {product:{name: "Test2"} , quantity: 3},
    {product:{name: "Test3"} , quantity: 42},
    {product:{name: "Test4"} , quantity: 5},
  ]
}

export default function asideReducer(state = initialState, action) {
  let cart = state.cart
  switch (action.type) {
    case ADD_TO_CART:
      let existItem = cart.find(item => item.product._id == action.payload.product._id)
      if(existItem){
        let quantityToExistItem = existItem.quantity
        quantityToExistItem++;
        existItem['quantity'] = quantityToExistItem
      } else{
        cart.push(action.payload)
      }
      return {
        ...state, cart: cart
      }
    default:
      return state
  }
}
