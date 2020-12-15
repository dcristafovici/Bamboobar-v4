import {
  ADD_TO_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  REMOVE_FROM_CART,
  EMPTY_CART
} from '../actions/actions-types/aside-actions'
const initialState = {
  cart: [],
  totalPrice: 0
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
        let newPriceGroup = newQuantity * itemInCart.product.price
        return {
          ...state,
          cart: state.cart.map(item => {
            return item !== itemInCart
              ? item
              : { ...itemInCart, quantity: newQuantity, priceGroup: newPriceGroup }
          }),

        }
      } else{
        return {
          ...state,
          cart: [...state.cart, action.payload],
        }
      }
    case ADD_QUANTITY:
      let newQuantity = action.payload.quantity
      newQuantity++
      let newPrice = newQuantity * action.payload.price
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product._id === action.payload.id
          ? {...item, quantity : newQuantity, priceGroup: newPrice}
          : item
        ),
      }
    case SUB_QUANTITY:
      let newSubQuantity = action.payload.quantity
      newSubQuantity--
      let newSubPrice = newSubQuantity * action.payload.price
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product._id === action.payload.id
            ? {...item, quantity : newSubQuantity, priceGroup: newSubPrice}
            : item
        )
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart
          .map(item => item.product._id === action.id ? {...item, quantity: item.quantity -1}: item)
          .filter(item => item.quantity > 0)
      }
    case EMPTY_CART:
      return {
        ...state,
        cart: []
      }
    default:
      return state
  }
}
