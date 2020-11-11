import React, {useState, useContext} from "react"
import UserContext from "../context/userContext";
import axios from "axios"

const Login = () => {
  const {setUserData} = useContext(UserContext)
  const [form, setForm] = useState({
    email: "", password: ""
  })

  const onChangeHandler = (event) =>{
    setForm({...form, [event.target.name]: event.target.value})
  }
  const onSubmitHandler = async(event) => {
    event.preventDefault()
    const loginResponse = await axios.post('/api/user/login', form)
    console.log(loginResponse)

    setUserData({
      token: loginResponse.data.token,
      user: loginResponse.data.user
    })
    localStorage.setItem("auth-token", loginResponse.data.token)

  }

  return(
    <div className="register-page">
      <div className="title">
        <h1>Login Page</h1>
      </div>
      <form className="register-form">
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" onChange={onChangeHandler} />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" onChange={onChangeHandler}/>
        </div>
        <div className="form-group">
          <button className="button" onClick={onSubmitHandler}>
            <span>Авторизация</span>
          </button>
        </div>

      </form>
    </div>
  )
}

export default Login
