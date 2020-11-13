import {LOAD_AUTH_START, LOAD_AUTH_SUCCESS, LOAD_AUTH_FALSE} from "../actions/actions-types/auth-actions"

const initialState = {
  token: undefined,
  user: undefined,
  loading: false,
  errors: null
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_AUTH_START:
      return {
        ...state,
        loading: true,
      }
    case LOAD_AUTH_SUCCESS:
      return{
        ...state,
        token : action.token,
        user: action.userData,
        loading: false,
      }
    case LOAD_AUTH_FALSE:
      return {
        ...state,
        errors: action.error,
        loading: false,
      }
    default:
      return state
  }
}


export default authReducer
