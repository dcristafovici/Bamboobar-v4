import {FETCH_CATEGORIES_START, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_ERROR} from "../actions/actions-types/categories-actions"
const initialState = {
  categories: [],
  loading: false
}

export default function categoriesReducer(state = initialState, action){
  switch (action.type) {
    case FETCH_CATEGORIES_START:
      return {
        ...state, loading: true
      }
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state, loading: false, categories: action.categories
      }
    case FETCH_CATEGORIES_ERROR:
      return {
        ...state, loading: false, error: action.error
      }
    default:
      return state
  }
}
