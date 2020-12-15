import {ADD_TO_CART, ADD_QUANTITY, SUB_QUANTITY} from '../actions/actions-types/aside-actions'
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
          cart: state.cart.map(item => {
            return item !== itemInCart
              ? item
              : { ...itemInCart, quantity: newQuantity }
          })
        }
      } else{
        return {
          ...state,
          cart: [...state.cart, action.payload]
        }
      }
    case ADD_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(product =>
          product._id === action._id
          ? {...product, quantity : product.quantity + 1}
          : product
        )
      }
    case SUB_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(product =>
          product._id === action._id
          ? {...product, quantity: product.quantity - 1}
          : product
        )
      }
    default:
      return state
  }
}
