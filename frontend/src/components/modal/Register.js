import React, {useState, useEffect} from "react"
import Popup from "reactjs-popup";
import axios from "axios"
const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    phone: "",
    username: "",
  })
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    phone: ""
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
    if(data['password'] !== ''){
      if(data['password'].length < 6 || data['password'].length > 25){
        setValid(false)
        errorsLocal['password'] = "Пароль должен иметь от 6 до 25 символов"
      }
    }

    // Validate Password Check
    if(data['passwordCheck'] == ''){
      setValid(false)
      errorsLocal['passwordCheck'] = 'Повторите пароль'
    }

    if(data['passwordCheck'] !== ''){
      if(data['password'] !== data['passwordCheck']) {
        setValid(false)
        errorsLocal['passwordCheck'] = ' Пароли не совпадают'
      }
    }

    // Validate Phone
    if(data['phone'] == ''){
      setValid(false)
      errorsLocal['phone'] = "Укажите номер телефона"
    }

    if(data['phone'] !== ''){
      let patternPhone = new RegExp('^(\\+7|7|8)?[\\s\\-]?\\(?[489][0-9]{2}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$')
      if(!patternPhone.test(data['phone'])){
        setValid(false)
        errorsLocal['phone'] = 'Укажите правильный номер телефона'
      }
    }


    setErrors(errorsLocal)
  }, [data])

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
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return(
    <Popup trigger={<div className="header-account__top"> <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/header/bear.png" /> <span>Регистрация</span> </div>} modal>
      <div className="register-form">
      <h2>Регистрация</h2>
      <form className="form">
        <div className="form-group">
          <label>E-mail*</label>
          <input type="email" onChange={onChangeHandler} defaultValue={data.email} name="email"/>
          <div className="form-error">{errors.email}</div>
        </div>
        <div className="form-group">
          <label>Пароль*</label>
          <input type="password" onChange={onChangeHandler}  defaultValue={data.password} name="password"/>
          <div className="form-error">{errors.password}</div>
        </div>
        <div className="form-group">
          <label>Повторите пароль*</label>
          <input type="password" onChange={onChangeHandler}  defaultValue={data.passwordCheck} name="passwordCheck"/>
          <div className="form-error">{errors.passwordCheck}</div>
        </div>
        <div className="form-group">
          <label>Телефон</label>
          <input type="tel" onChange={onChangeHandler}  defaultValue={data.phone} name="phone"/>
          <div className="form-error">{errors.phone}</div>
        </div>
        <div className="form-group">
          <label>Имя и фамилия</label>
          <input type="text" onChange={onChangeHandler} defaultValue={data.username} name="username"/>

        </div>
        <div className="form-group">
          <button className={"button" + (valid ? '' : ' disabled')} onClick={onSubmitHandler}>
            <span>Регистрация</span>
          </button>
        </div>
      </form>
    </div>
    </Popup>
  )
}
export default Register
