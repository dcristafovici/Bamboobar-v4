import {ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY} from './actions-types/aside-actions'

export function addToCart(product) {
  return{
    type: ADD_TO_CART,
    payload : {
      product,
      quantity: 1
    }
  }
}

export const updateCartQuantity = (productId, quantity) => {
  return{
    type: UPDATE_CART_QUANTITY,
    payload: {
      productId,
      quantity
    }
  }
}
