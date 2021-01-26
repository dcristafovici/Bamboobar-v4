import React, {useState, useEffect} from "react"
import Popup from "reactjs-popup";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import {connect} from 'react-redux'


const Order = ({user, typename, cart, address, totalPrice}) => {

  const [data, setData] = useState({
    products: cart ,
    customer_name: user.user ? user.user.username : '',
    customer_email: user.user ? user.user.email : '',
    customer_phone: user.user ? user.user.phone : '',
    address: address ? address.address: '',
    street: "",
    deliveryTime: "",
    cutlery: "",
    additional: "",
    user: user.user ? user.user.id : ""
  })

  const [errors, setErrors] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    deliveryDate: "",
    deliveryTime: ""
  })
  const [startDate, setStartDate] = useState(new Date());

  const [valid, setValid] = useState(false)

  const onChangeHandler = (event) =>{
    setData({...data, [event.target.name]: event.target.value})
  }

  useEffect(() =>{
    if(user.user){
      setData({
        ...data,
        customer_name: user.user.username,
        customer_email: user.user.email,
        customer_phone: user.user.phone
      })
    }
  }, [user])
  useEffect( () => {
    let errorsLocal = {}
    setValid(true)
    // Validate Name
    if(data['customer_name'] === ''){
      setValid(false)
      errorsLocal['customer_name'] = 'Имя объязательно для заполнения'
    }

    // Validate Email
    if(data['customer_email'] === ''){
      setValid(false)
      errorsLocal['customer_email'] = 'Укажите адрес электронной почты'
    }
    if(data['customer_email'] !== ''){
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if(!pattern.test(data['customer_email'])){
        setValid(false)
        errorsLocal['customer_email'] = "Укажите правильно адресс электронной почты"
      }
    }

    // Validate Phone
    if(data['customer_phone'] === ''){
      setValid(false)
      errorsLocal['customer_phone'] = "Укажите номер телефона"
    }

    if(data['customer_phone'] !== ''){
      let patternPhone = new RegExp('^(\\+7|7|8)?[\\s\\-]?\\(?[489][0-9]{2}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$')
      if(!patternPhone.test(data['customer_phone'])){
        setValid(false)
        errorsLocal['customer_phone'] = 'Укажите правильный номер телефона'
      }
    }

    // Validate Date
    if(data['deliveryDate'] === ''){
      setValid(false)
      errorsLocal['deliveryDate'] = 'Дата объязательно для заполнения'
    }

    // Validate Time
    if(data['deliveryTime'] === ''){
      setValid(false)
      errorsLocal['deliveryTime'] = 'Время объязательно для заполнения'
    }

    setErrors(errorsLocal)
  }, [data])

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try{
      console.log(data)
      const response = await axios.post('/api/order/create', data)
      console.log(response)
    } catch (err){
      console.log(err.message)
    }
  }

  return(
    <Popup trigger={<a className={"button button-checkout " + typename}> <span>Оформить заказ</span> </a>} modal>
      <div id="checkout">

        <form name="checkout" method="post" className="checkout">
          <h2>Детали оплаты </h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="billing_first_name">Имя</label>
              <input type="text"  onChange={onChangeHandler} className="input-text" defaultValue={data.customer_name} name="customer_name"  />
              <div className="form-error">{errors.customer_name}</div>
            </div>
            <div className="form-group" >
              <label htmlFor="billing_email">Email</label>
              <input type="email" onChange={onChangeHandler} className="input-text" defaultValue={data.customer_email}  name="customer_email" />
              <div className="form-error">{errors.customer_email}</div>

            </div>
            <div className="form-group">
              <label htmlFor="billing_phone">Телефон</label>
              <input type="tel" onChange={onChangeHandler} className="input-text" defaultValue={data.customer_phone}  name="customer_phone" />
              <div className="form-error">{errors.customer_phone}</div>
            </div>
            <div className="form-group notedit">
              <label htmlFor="billing_address_1">Адрес</label>
              <input type="text" onChange={onChangeHandler} className="input-text" defaultValue={data.address}   name="address" id="billing_address_1"/>
            </div>
            <div className="form-group">
              <label htmlFor="billing_addresstwo">Подъезд/ квартира/</label>
              <input type="text" onChange={onChangeHandler} className="input-text" name="street" id="billing_addresstwo"/>
            </div>
            <div className="form-group">
              <label htmlFor="billing_date">Дата</label>
              <DatePicker selected={startDate} onChange={date => setStartDate(date)}/>
              <div className="form-error">{errors.deliveryDate}</div>
            </div>
            <div className="form-group">
              <label htmlFor="billing_time">Время</label>
              <input type="time"   onChange={onChangeHandler} className="input-text"  name="deliveryTime" />
              <div className="form-error">{errors.deliveryTime}</div>
            </div>
            <div className="form-group">
              <label htmlFor="billing_cutlery">Приборы<span className="optional">(необязательно)</span></label>
              <input type="text" onChange={onChangeHandler} className="input-text" name="cutlery" id="billing_cutlery"/>
            </div>
          </div>
          <div className="form-collection">
            <div className="form-group">
              <label htmlFor="order_comments">Примечание к заказу<span className="optional">(необязательно)</span></label>
              <textarea name="order_comments" onChange={onChangeHandler} className="input-text" name="additional"  id="order_comments"></textarea>
            </div>
          </div>
        </form>
        <div className="checkout-wrapper">
          <div className="checkout-total">
            <div className="checkout-total__item">
              <div className="checkout-total__label">Время доставки</div>
              <div className="checkout-total__value" id="checkout-pop__time">~30 мин</div>
            </div>
            <div className="checkout-total__item">
              <div className="checkout-total__label">Итого</div>
              <div className="checkout-total__value"><span>{totalPrice} ₽</span>
              </div>
            </div>
            <div className="checkout-total__item">
              <a className={"button" + (valid ? '' : ' disabled')} onClick={onSubmitHandler}>
                <span>Оформить заказ</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer,
    address: state.addressReducer
  }}

export default connect(mapStateToProps)(Order)
