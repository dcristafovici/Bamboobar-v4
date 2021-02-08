import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL
} from '../actions/actions-types/products-actions'
import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_PRODUCTS_START,
    })
    const {data} = await axios.get('/api/product/getAll')
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
  }
}
