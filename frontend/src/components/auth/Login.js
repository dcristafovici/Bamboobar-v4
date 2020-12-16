import React, {useState, useContext} from "react"
import axios from "axios"
import UserContext from "../../context/UserContext"
import ErrorNotice from "../../misc/ErrorNotice";
const Login = () => {

  const {setUserData} = useContext(UserContext)
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
    try{
      const loginRes = await axios.post('/api/auth/login', data)
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user
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

export default Login
