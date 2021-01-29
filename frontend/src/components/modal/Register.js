import React, {useState, useEffect} from "react"
import Popup from "reactjs-popup";
import axios from "axios"
import {connect} from "react-redux"
import {openRegister, closeRegister, openLogin} from "../../redux/actions/modalAction";


const Register = ({modal, openRegister, closeRegister, openLogin}) => {
  const [data, setData] = useState({
    phone: ""
  })
  const [errors, setErrors] = useState({
    phone: "",
    code: "",
    msg: ""
  })
  const [code ,setCode] = useState('')



  const [valid, setValid] = useState(false)
  const onChangeHandler = (event) => {
    setData({...data, [event.target.name]: event.target.value})
  }

  const onChangeSmsHandler = async(event) => {
    if(event.target.value === code){
      setErrors({...errors, code: ""})
      await axios.post('/api/auth/register', data)
      closeRegister()
      openLogin()
    } else{
      setErrors({...errors, code : "Неправильный код"})
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
      const registerResponse = await axios.post('/api/auth/checkRegister', data)
      if(!registerResponse.data.message.includes('Message accepted for sending')){
        console.log(registerResponse.data.code)
        setCode(registerResponse.data.code)
      }
    } catch (error) {
      console.log(error.response.data)
      setErrors(error.response.data)
    }
  }

  return(
    <Popup onClose={() => closeRegister()}  onOpen={() => openRegister()}  open={modal.registerModal} trigger={<div className="header-account__top"> <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/header/bear.png" /> <span>Регистрация</span> </div>}  modal>
      <div className="register-form">
      <h2>Регистрация</h2>
      <form className="form">
        <div className="form-group">
          <label>Телефон</label>
          <input type="tel" onChange={onChangeHandler}  defaultValue={data.phone} name="phone"/>
          <div className="form-error">{errors.phone}</div>
        </div>
        {(code !== '') ? (
          <div className="form-group">
            <label>Код</label>
            <input type="tel" onChange={onChangeSmsHandler} name="code"/>
            <div className="form-error">{errors.code}</div>
          </div>
          ): ''}
        {(code === '') ? (
        <div className="form-group">
          <button className={"button" + (valid ? '' : ' disabled')} onClick={onSubmitHandler}>
            <span>Регистрация</span>
          </button>
        </div>
        ) : ''}
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
    openLogin: () => dispatch(openLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
