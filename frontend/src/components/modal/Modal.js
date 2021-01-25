import React, {useState} from "react"
import Popup from 'reactjs-popup';
import axios from "axios"
import {connect} from "react-redux"

const Modal = ({cart, user, address, totalPrice}) => {
  const [order, setOrder] = useState({
    products: [],
    customer_phone: '',

  })

  let userId
  if(user){
    userId = user.id
  }

  const onChangeHandler = (event) =>{
    setOrder({...order, products: cart, price: 0, user: userId, [event.target.name] : event.target.value})
  }
  const onClickHandler = async(event) => {
    event.preventDefault()
    try {
      const createOrder = await axios.post('/api/order/create', order)
    }catch (err) {
      console.log(err)
    }
  }
  return(
  <Popup trigger={<a className="button button-checkout"> <span>Оформить заказ</span> </a>} modal>
    <div id="checkout">
      <form name="checkout" method="post" className="checkout">
        <h2>Детали оплаты</h2>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="billing_first_name">Имя</label>
            <input type="text" className="input-text" onChange={onChangeHandler} name="customer_name" defaultValue={user != undefined ? user.username : ""} />
          </div>
          <div className="form-group">
            <label htmlFor="billing_email">Email</label>
            <input type="email" className="input-text" onChange={onChangeHandler} name="customer_email" defaultValue={user != undefined ? user.email : ""}/>
          </div>
          <div className="form-group">
            <label htmlFor="billing_phone">Телефон</label>
            <input type="tel" className="input-text" onChange={onChangeHandler} name="customer_phone" defaultValue={user != undefined ? user.phone : ""}/>
          </div>
          <div className="form-group">
            <label htmlFor="billing_address_1">Адрес</label>
            <input type="text" className="input-text" onChange={onChangeHandler} defaultValue={address} name="address" id="billing_address_1"/>
          </div>
          <div className="form-group">
            <label htmlFor="billing_addresstwo">Подъезд/ квартира/</label>
            <input type="text" className="input-text" name="street" onChange={onChangeHandler} id="billing_addresstwo"/>
          </div>
          <div className="form-group">
            <label htmlFor="billing_date">Дата</label>
            <input type="text" className="input-text" onChange={onChangeHandler} name="deliveryDate" id="billing_date"/>
          </div>
          <div className="form-group">
            <label htmlFor="billing_time">Время</label>
            <input type="text" className="input-text" onChange={onChangeHandler} name="deliveryTime" />
          </div>
          <div className="form-group">
            <label htmlFor="billing_cutlery">Приборы<span className="optional">(необязательно)</span></label>
            <input type="text" className="input-text" name="billing_cutlery" id="billing_cutlery"/>
          </div>
        </div>
        <div className="form-collection">
          <div className="form-group">
            <label htmlFor="order_comments">Примечание к заказу<span className="optional">(необязательно)</span></label>
            <textarea name="order_comments" className="input-text" name="additional" onChange={onChangeHandler} id="order_comments"></textarea>
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
            <a href="#" onClick={onClickHandler} className="button">
              <span>Оформить заказ</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Popup>
  )
};


const mapStateToProps = (state) => {
  return{
    user: state.authReducer.user,
    address: state.addressReducer.address,
  }
}
export default connect(mapStateToProps)(Modal)
