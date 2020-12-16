import React, {useState} from "react"
import axios from "axios"
import {connect} from "react-redux"
import ErrorNotice from "../../misc/ErrorNotice";
import {clearUserData, setUserData} from '../../redux/actions/authAction'


const Login = ({setUserData}) => {

  const [error, setError] = useState("")
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const onChangeHandler = event => {
    setData({...data, [event.target.name]: event.target.value})
  }
  const onClickHandler = async(event) => {
    event.preventDefault()
      try {
        const loginRes = await axios.post('/api/auth/login', data)
        setUserData({
          token: loginRes.data.token,
          user: loginRes.data.user.user
        })
        localStorage.setItem("auth-token", loginRes.data.token)
      } catch (err) {
        err.response.data.msg && setError(err.response.data.msg)
      }

  }
  return(
    <div className="login-page">
      <h2>Login</h2>
      {error && <ErrorNotice message={error} clearError={()=> setError(undefined)}/>}
      <form className="login-form">
        <div className="form-group">
          <input type="text" name="email" onChange={onChangeHandler} placeholder="Email"/>
        </div>
        <div className="form-group">
          <input type="password" name="password" onChange={onChangeHandler} placeholder="Пароль"/>
        </div>
        <div className="form-group">
          <button className="button" onClick={onClickHandler}>
            <span>Авторизация</span>
          </button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return{
    auth: state.authReducer
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    setUserData: (token, user) => dispatch(setUserData(token, user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
