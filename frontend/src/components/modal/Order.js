import React, {useState, useEffect} from "react"
import Popup from "reactjs-popup";
import {connect} from 'react-redux'


const Order = ({user, typename, address, totalPrice}) => {

  const [errors, setErrors] = useState({
    email: "",
    phone: ""
  })

  const [valid, setValid] = useState(false)


  return(
    <Popup trigger={<a className={"button button-checkout " + typename}> <span>Оформить заказ</span> </a>} modal>
      <div id="checkout">
        <form name="checkout" method="post" className="checkout">
          <h2>Детали оплаты</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="billing_first_name">Имя</label>
              <input type="text" className="input-text" defaultValue={user.user ? user.user.username : ''}  name="customer_name"  />
            </div>
            <div className="form-group" >
              <label htmlFor="billing_email">Email</label>
              <input type="email" className="input-text" defaultValue={user.user ? user.user.email : ''}  name="customer_email" />
            </div>
            <div className="form-group">
              <label htmlFor="billing_phone">Телефон</label>
              <input type="tel" className="input-text" defaultValue={user.user ? user.user.phone : ''}  name="customer_phone" />
            </div>
            <div className="form-group">
              <label htmlFor="billing_address_1">Адрес</label>
              <input type="text" className="input-text" defaultValue={address ? address.address: ''}   name="address" id="billing_address_1"/>
            </div>
            <div className="form-group">
              <label htmlFor="billing_addresstwo">Подъезд/ квартира/</label>
              <input type="text" className="input-text" name="street" id="billing_addresstwo"/>
            </div>
            <div className="form-group">
              <label htmlFor="billing_date">Дата</label>
              <input type="text" className="input-text"  name="deliveryDate" id="billing_date"/>
            </div>
            <div className="form-group">
              <label htmlFor="billing_time">Время</label>
              <input type="text" className="input-text"  name="deliveryTime" />
            </div>
            <div className="form-group">
              <label htmlFor="billing_cutlery">Приборы<span className="optional">(необязательно)</span></label>
              <input type="text" className="input-text" name="billing_cutlery" id="billing_cutlery"/>
            </div>
          </div>
          <div className="form-collection">
            <div className="form-group">
              <label htmlFor="order_comments">Примечание к заказу<span className="optional">(необязательно)</span></label>
              <textarea name="order_comments" className="input-text" name="additional"  id="order_comments"></textarea>
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
              <a href="#"  className="button">
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
