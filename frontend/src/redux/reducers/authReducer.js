import {SET_USER_DATA, CLEAR_USER_DATA} from "../actions/actions-types/auth-actions"
const initialState = {
  user: null
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return{
        ...state,
        user: action.payload.user
      }
    case CLEAR_USER_DATA:
      localStorage.removeItem('auth-token')
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}
