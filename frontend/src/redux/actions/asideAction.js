import {ADD_TO_CART, ADD_QUANTITY, SUB_QUANTITY} from './actions-types/aside-actions'

export function addToCart(product) {
  return{
    type: ADD_TO_CART,
    payload : {
      product,
      quantity: 1
    }
  }
}
export function addQuantity(id) {
  return{
    type: ADD_QUANTITY,
    id,
  }
}

export function subQuantity(id) {
  return{
    type : SUB_QUANTITY,
    id
  }
}
