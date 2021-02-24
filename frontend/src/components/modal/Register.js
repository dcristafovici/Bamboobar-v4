import React, {useState, useEffect} from "react"
import Popup from "reactjs-popup";
import axios from "axios"
import {connect} from "react-redux"
import {openRegister, closeRegister, openLogin} from "../../redux/actions/modalAction";
import {setUserData} from "../../redux/actions/authAction";


const Register = ({modal, openRegister, closeRegister, openLogin, setUserData}) => {
  const [data, setData] = useState({
    phone: "",
    code: ""
  })
  const [errors, setErrors] = useState({
    phone: "",
    code: "",
    msg: ""
  })
  const [session , setSession] = useState('')
  const [valid, setValid] = useState(false)

  const onChangeHandler = (event) => {
    setData({...data, [event.target.name]: event.target.value})
  }

  const checkLogged = async(token) => {
    try{
      const tokenResponse = await axios.post(
        '/api/auth/check',
        null ,
        {headers: {'x-auth-token': token}})
      if(tokenResponse.data){
        setUserData(tokenResponse.data)
      }
    } catch (err){
      console.log(err.message)
    }
  }

  const successfulAuth = async() => {
    try{
      setErrors({...errors, code: ""})
      const responseAuth = await axios.post('/api/auth/auth', data)
      localStorage.setItem('auth-token', responseAuth.data.token)
      closeRegister()
      checkLogged(responseAuth.data.token)
    } catch (err){
      console.log(err.message)
    }
  }
  const checkCodeByBase = async(event) => {
    event.preventDefault()
    try{
      const response = await axios.post('/api/auth/getCode', {session: session})
      if(data.code === response.data.code){
        successfulAuth()
      }
      else{
        setErrors({...errors, session : "Неправильный код"})
      }
    }
    catch (err){
      setErrors({...errors, session: err.response.data.message})
    }
  }

  useEffect(() => {
    let errorsLocal = {}
    setValid(true)
    // Validate Phone
    if(data['phone'] === ''){
      setValid(false)
      errorsLocal['phone'] = "Укажите номер телефона"
    }

    if(data['phone'] !== ''){
      let patternPhone = new RegExp('^(\\+7|8)?[\\s\\-]?\\(?[489][0-9]{2}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$')
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
      const registerResponse = await axios.post('/api/auth/generate', data)
      if(registerResponse.data.message.includes('Message accepted for sending')){
        setSession(registerResponse.data.session)
      }
    } catch (error) {
      console.log(error.response.data)
      setErrors(error.response.data)
    }
  }

  return(
    <Popup
      onClose={() => closeRegister()}
      onOpen={() => openRegister()}
      open={modal.registerModal}
      trigger={<div className="header-account__top"> <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/header/bear.png" /> <span>Вход</span> </div>}  modal>
      <div className="register-form">
      <h2>Авторизация</h2>
      <form className="form">
        <div className="form-group">
          <label>Телефон</label>
          <input type="tel" onChange={onChangeHandler}  defaultValue={data.phone} name="phone"/>
          <div className="form-error">{errors.phone}</div>
        </div>
        {(session !== '') ? (
          <div className="form-group">
            <label>Код</label>
            <input type="tel" onChange={onChangeHandler} defaultValue={data.code} name="code"/>
            <div className="form-error">{errors.session}</div>
          </div>
          ): ''}
        {(session === '') ? (
        <div className="form-group">
          <button className={"button" + (valid ? '' : ' disabled')} onClick={onSubmitHandler}>
            <span>Регистрация</span>
          </button>
        </div>
        ) :
        <div className="form-group">
          <button className={'button'} onClick={checkCodeByBase}>
            <span>Вход</span>
          </button>
        </div>
        }
      </form>
    </div>
    </Popup>
  )
}

const mapStateToProps = (state) =>{
  return{
    modal: state.modalReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    openRegister : () => dispatch(openRegister()),
    closeRegister : () => dispatch(closeRegister()),
    openLogin: () => dispatch(openLogin()),
    setUserData: (user) => dispatch(setUserData(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
