import {ADD_TO_ASIDE} from "./actions-types/aside-actions";

export const addToAside = (payload) => {
  console.log(payload)
  return{
    type: ADD_TO_ASIDE,
    payload: payload
  }
}
