import {ADD_TO_ASIDE, ADD_QUANTITY, SUB_QUANTITY} from "./actions-types/aside-actions";

export const addToAside = (payload) => {

  return{
    type: ADD_TO_ASIDE,
    payload: payload
  }
}

export const addQuantity = (payload) => {

  return{
    type: ADD_QUANTITY,
    payload: payload
  }
}


export const minQuantity = (payload) => {
  return{
    type: SUB_QUANTITY,
    payload: payload
  }
}
