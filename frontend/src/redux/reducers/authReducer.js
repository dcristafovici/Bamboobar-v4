import {LOAD_AUTH_DATE} from "../actions/actions-types/auth-actions"

const initialState = {
  token: undefined,
  user: undefined
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}


export default authReducer
