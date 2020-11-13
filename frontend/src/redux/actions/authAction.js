import { LOAD_AUTH_FALSE, LOAD_AUTH_START, LOAD_AUTH_SUCCESS} from '../actions/actions-types/auth-actions'
import axios from "axios";


export function loadAuthDate() {
  return async(dispatch) => {
    dispatch(loadAuthStart())
    try{
      let token = localStorage.getItem("auth-token")
      if(token === null) {
        token = ""
      }
      const tokenResponse = await axios.post('/api/user/tokenIsValid', null, {headers: {"x-auth-token": token} })
      if(tokenResponse.data){
        const userRes = await axios.get('/api/user/getUser ', {headers: {"x-auth-token": token, "id": tokenResponse.data.data._id},})
        dispatch(loadAuthSuccess(token, userRes.data))
      }
    } catch (e) {
      dispatch(loadAuthFalse(e))
    }
  }
}


export function loadAuthStart() {
  return{
    type: LOAD_AUTH_START
  }
}

export function loadAuthSuccess(token, userData) {
  return {
    type: LOAD_AUTH_SUCCESS,
    token: token,
    userData: userData
  }
}

export function loadAuthFalse(e) {
  return {
    type: LOAD_AUTH_FALSE,
    error: e
  }
}
