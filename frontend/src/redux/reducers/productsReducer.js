import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL
} from '../actions/actions-types/products-actions'

const initialState = {
  products: [],
  loading: false,
  error: null
}

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload
      }
    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
