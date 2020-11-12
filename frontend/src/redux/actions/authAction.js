import {LOAD_AUTH_DATE, LOAD_AUTH_FALSE, LOAD_AUTH_START, LOAD_AUTH_SUCCESS} from '../actions/actions-types/auth-actions'
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
        return {
          type: LOAD_AUTH_DATE,
          token: token,
          user: userRes.data
        }
      }
    } catch (e) {

    }
  }
}


export function loadAuthStart() {

}
