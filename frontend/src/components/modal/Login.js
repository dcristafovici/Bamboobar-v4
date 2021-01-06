import React,{useState, useEffect} from 'react'
import Popup from "reactjs-popup";
import axios from "axios"

const Login = () => {

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })
  const [valid, setValid] = useState(false)

  const onChangeHandler = (event) => {
    setData({...data, [event.target.name]: event.target.value})
  }

  useEffect(() => {
    let errorsLocal = {}
    setValid(true)

    // Validate Email
    if(data['email'] == ''){
      setValid(false)
      errorsLocal['email'] = 'Укажите адрес электронной почты'
    }
    if(data['email'] !== ''){
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if(!pattern.test(data['email'])){
        setValid(false)
        errorsLocal['email'] = "Укажите правильно адресс электронной почты"
      }
    }
    // Validate Password
    if(data['password'] == ''){
      setValid(false);
      errorsLocal['password'] = 'Пароль обязателен'
    }
    setErrors(errorsLocal)


  }, [data])


  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try{
      const response = await axios.post(
        '/api/auth/login',
        data
      )
      localStorage.setItem('auth-token', response.data.token)
    } catch (error) {
      setErrors(error.response.data)
    }
  }

  return(
    <Popup trigger={<div className="header-account__top"> <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/header/bear.png" /> <span>Авторизация</span> </div>} modal>
      <div className="register-form login-form">
        <h2>Авторизация</h2>
        <form className="form">
          <div className="form-group">
            <label>E-mail*</label>
            <input type="email" onChange={onChangeHandler} defaultValue={data.email} name="email"/>
            <div className="form-error">{errors.email}</div>
          </div>
          <div className="form-group">
            <label>Пароль*</label>
            <input type="password" onChange={onChangeHandler} defaultValue={data.password} name="password"/>
            <div className="form-error">{errors.password}</div>
          </div>
          <div className="form-group">
            <button className={"button" + (valid ? '' : ' disabled')} onClick={onSubmitHandler}>
              <span>Авторизация</span>
            </button>
          </div>
        </form>
      </div>
    </Popup>
  )
}

export default Login
