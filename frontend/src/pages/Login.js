import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"
import {connect} from "react-redux"

const Login = ({ updateStateToken, authReducer }) => {
  const history = useHistory()
  const [form, setForm] = useState({
    email: "", password: ""
  })

  const onChangeHandler = (event) =>{
    setForm({...form, [event.target.name]: event.target.value})
  }
  const onSubmitHandler = async(event) => {
    event.preventDefault()
    const loginResponse = await axios.post('/api/user/login', form)
    localStorage.setItem("auth-token", loginResponse.data.token)
    history.push('/')
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

const mapStateToProps = (state) => {
  return{
    authReducer : state.authReducer
  }
}


export default connect(mapStateToProps)(Login)
