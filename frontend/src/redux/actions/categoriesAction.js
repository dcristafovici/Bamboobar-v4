import {FETCH_CATEGORIES_START, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_ERROR} from "./actions-types/categories-actions"
import axios from "axios"

export function fetchCategories() {
  return async dispatch => {
    dispatch(fetchCategoriesStart())
    try {
      const response = await axios.get('/api/category/categories')
      const categories = []
      categories.push(response.data.data)
      dispatch(fetchCategoriesSuccess(categories))
    } catch (e) {
      dispatch(fetchCategoriesError(e))
    }
  }
}

export function fetchCategoriesStart() {
  return{
    type: FETCH_CATEGORIES_START
  }
}


export function fetchCategoriesSuccess(categories) {
  return{
    type: FETCH_CATEGORIES_SUCCESS,
    categories
  }
}

export function fetchCategoriesError(error) {
  return{
    type: FETCH_CATEGORIES_ERROR ,
    error
  }
}
