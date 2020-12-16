import React, {useState} from "react"
import axios from 'axios'

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    displayName: ""
  })
  const onChangeHandler = (event) => {
    setData({...data, [event.target.name]: event.target.value})
  }
  const onSubmitHandler = async(event) => {
    event.preventDefault()
    try {
      const register = await axios.post('/api/auth/register', data)
      const response = register.data
      setData({
        email: "",
        password: "",
        passwordCheck: "",
        displayName: ""
      })
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <div className="register-page">
      <h2>Register</h2>
      <form className="form register-form">
        <div className="form-group">
          <input type="text" name="email" defaultValue={data.email} onChange={onChangeHandler} placeholder="Е-майл"/>
        </div>
        <div className="form-group">
          <input type="password" name="password" defaultValue={data.password} onChange={onChangeHandler} placeholder="Пароль"/>
        </div>
        <div className="form-group">
          <input type="password" name="passwordCheck" defaultValue={data.passwordCheck} onChange={onChangeHandler} placeholder="Повторите пароль"/>
        </div>
        <div className="form-group">
          <input type="text" name="displayName" defaultValue={data.displayName} onChange={onChangeHandler} placeholder="ФИО"/>
        </div>
        <div className="form-group">
          <button className="button" onClick={onSubmitHandler}>
            <span>Регистрация</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
