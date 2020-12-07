import {FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from "./actions-types/products-actions"
import axios from "axios"

export function fetchProductsById(id){
  return async dispatch => {
    dispatch(fetchProductsStart())
    try{
      const response = await axios.get('/api/product/findById/'+ id)
      const products = []
      products.push(response.data.products)
      dispatch(fetchProductsSuccess(products))
    }catch (error) {
      dispatch(fetchProductsError(error))
    }
  }
}

export function fetchProductsStart() {
  return{
    type: FETCH_PRODUCTS_START
  }
}

export function fetchProductsSuccess(products) {
  return{
    type: FETCH_PRODUCTS_SUCCESS,
    products
  }
}

export function fetchProductsError(error) {
  return{
    type: FETCH_PRODUCTS_ERROR,
    error
  }
}
