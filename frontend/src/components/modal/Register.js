import React, {useState} from "react"
import Popup from "reactjs-popup";
import axios from "axios"
import ErrorNotice from "../../misc/ErrorNotice";
const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    phone: "",
    username: "",
    address: ""
  })
  const [errors, setErrors] = useState(null)

  const onChangeHandler = (event) => {
    setData({...data, [event.target.name]: event.target.value})
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try{
      const registerResponse = await axios.post('/api/auth/register', data)
      setData({
        email: "",
        password: "",
        passwordCheck: "",
        phone: "",
        username: "",
        address: ""
      })
    } catch (err) {
      setErrors(err)
    }
  }

  return(
    <Popup trigger={<div className="header-account__top"> <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/header/bear.png" /> <span>Регистрация</span> </div>} modal>
      <div className="register-form">
        <h2>Регистрация</h2>
        <div className="form-error">
          {errors && <ErrorNotice error={errors.msg}/>}
        </div>
        <form className="form">
          <div className="form-group">
            <label>E-mail*</label>
            <input type="email" onChange={onChangeHandler} defaultValue={data.email} name="email"/>
          </div>
          <div className="form-group">
            <label>Пароль*</label>
            <input type="password" onChange={onChangeHandler}  defaultValue={data.password} name="password"/>
          </div>
          <div className="form-group">
            <label>Повторите пароль*</label>
            <input type="password" onChange={onChangeHandler}  defaultValue={data.passwordCheck} name="passwordCheck"/>
          </div>
          <div className="form-group">
            <label>Телефон</label>
            <input type="tel" onChange={onChangeHandler}  defaultValue={data.phone} name="phone"/>
          </div>
          <div className="form-group">
            <label>Имя</label>
            <input type="text" onChange={onChangeHandler} defaultValue={data.username} name="username"/>
          </div>
          <div className="form-group">
            <label>Адрес</label>
            <input type="text" onChange={onChangeHandler}  defaultValue={data.address} name="address"/>
          </div>
          <div className="form-group">
            <button className="button" onClick={onSubmitHandler}>
              <span>Регистрация</span>
            </button>
          </div>
        </form>
      </div>
    </Popup>
  )
}
export default Register
