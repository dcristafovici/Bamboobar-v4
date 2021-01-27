import {
  ADD_TO_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  REMOVE_FROM_CART,
  EMPTY_CART,
  UPDATE_PRICE
} from './actions-types/aside-actions'

export function addToCart(product) {
  return{
    type: ADD_TO_CART,
    payload : {
      product,
      quantity: 1,
      priceGroup: product.price,
      priceItem: product.price,
      name: product.name
    }
  }
}
export function addQuantity(id, quantity, price) {
  return{
    type: ADD_QUANTITY,
    payload: {
      id,
      quantity,
      price
    }
  }
}

export function subQuantity(id, quantity, price ) {
  return{
    type : SUB_QUANTITY,
    payload: {
      id,
      quantity,
      price
    }
  }
}

export function removeFromCart(id) {
  return{
    type: REMOVE_FROM_CART,
    id
  }
}

export function emptyCart() {
  return{
    type: EMPTY_CART
  }
}

