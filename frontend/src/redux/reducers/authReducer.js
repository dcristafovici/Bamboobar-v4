import {SET_USER_DATA, CLEAR_USER_DATA} from "../actions/actions-types/auth-actions"
const initialState = {
  token: undefined,
  user: undefined
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return{
        ...state,
        token: action.payload.token,
        user: action.payload.user
      }
    case CLEAR_USER_DATA:
      return {
        ...state,
        token: undefined,
        user: undefined
      }
    default:
      return state
  }
}
