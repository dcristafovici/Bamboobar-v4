import {
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR
} from "./actions-types/categories-actions"
import axios from "axios"

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_CATEGORIES_START,
    })
    const {data} = await axios.get('/api/category/categories')

    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: data.data
    })

  } catch (error) {
    dispatch({
      type: FETCH_CATEGORIES_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
