import {
  ADD_TO_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  REMOVE_FROM_CART,
  EMPTY_CART,
  SET_TOTAL,
  SET_PERCENT,
  OPEN_NOT_DELIVERY
} from './actions-types/aside-actions'

export function addToCart(product) {
  return{
    type: ADD_TO_CART,
    payload : {
      product,
      quantity: 1,
      priceGroup: product.price,
      priceItem: product.price,
      priceWithSale: product.price - product.price * .20,
      priceGroupWithSale: product.price - product.price * .20,
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
      price,
      priceWithSale: price - price * .20,
    }
  }
}

export function subQuantity(id, quantity, price ) {
  return{
    type : SUB_QUANTITY,
    payload: {
      id,
      quantity,
      price,
      priceWithSale: price - price * .20,
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

export function setTotal(total)  {
  return{
    type: SET_TOTAL,
    payload: {
      total
    }
  }
}

export function setPercent(percent) {
  return{
    type: SET_PERCENT,
    payload: {
      percent
    }
  }
}


export function openNotDelivery(status){
  return{
    type: OPEN_NOT_DELIVERY,
    payload: {
      status
    }
  }
}
