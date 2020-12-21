import React, {useState, useEffect} from "react"
import Popup from 'reactjs-popup';
import axios from "axios"
import {connect} from "react-redux"

const Modal = ({cart, totalPrice, user}) => {
  const [order, setOrder] = useState({
    products: []
  })

  let userId
  if(user){
    userId = user.id
  }

  const onChangeHandler = (event) =>{
    setOrder({...order, products: cart, price: totalPrice, user: userId, [event.target.name] : event.target.value})
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
      <div className="woocommerce">
        <div className="woocommerce-notices-wrapper"></div>
        <div className="woocommerce-notices-wrapper"></div>
        <form name="checkout" method="post" className="checkout woocommerce-checkout" encType="multipart/form-data"
              noValidate="novalidate">
          <div className="col2-set" id="customer_details">
            <div className="col-1">
              <div className="woocommerce-billing-fields">
                <h3>Детали оплаты</h3>
                <div className="woocommerce-billing-fields__field-wrapper">
                  <p className="form-row form-row-first" id="billing_first_name_field" data-priority="10">
                    <label htmlFor="billing_first_name">Имя</label>
                    <input type="text" className="input-text" onChange={onChangeHandler} name="customer_name" id="billing_first_name"/>
                  </p>
                  <p
                    className="form-row"
                    id="billing_email_field">
                    <label htmlFor="billing_email">Email</label>
                    <input type="email" className="input-text" onChange={onChangeHandler} name="customer_email" id="billing_email"/>
                  </p>
                  <p className="form-row "
                     id="billing_phone_field">
                    <label htmlFor="billing_phone">Телефон</label>
                    <input type="tel" className="input-text" onChange={onChangeHandler} name="customer_phone" id="billing_phone" />
                  </p>
                  <p className="form-row " id="billing_address_1_field">
                    <label htmlFor="billing_address_1">Адрес</label>
                    <input type="text" className="input-text" onChange={onChangeHandler} name="address" id="billing_address_1"/>
                  </p>
                  <p className="form-row" id="billing_addresstwo_field">
                    <label htmlFor="billing_addresstwo">Подъезд/ квартира/</label>
                    <input type="text" className="input-text" name="street" onChange={onChangeHandler} id="billing_addresstwo"/>
                  </p>
                  <p className="form-row form-row-wide" id="billing_date_field"><label
                    htmlFor="billing_date">Дата</label>
                    <input type="text" className="input-text" onChange={onChangeHandler} name="deliveryDate" id="billing_date"/>
                  </p>
                  <p className="form-row form-row-wide form-row-time" id="billing_time_field"><label
                    htmlFor="billing_time">Время</label>
                    <input type="text" className="input-text" onChange={onChangeHandler} name="deliveryTime"
                           id="billing_time"/>
                  </p>
                  <p className="form-row form-row-wide" id="billing_cutlery_field">
                    <label htmlFor="billing_cutlery">Приборы<span className="optional">(необязательно)</span></label>
                    <input type="text" className="input-text" name="billing_cutlery" id="billing_cutlery"/>
                  </p>

                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="woocommerce-shipping-fields">
              </div>
              <div className="woocommerce-additional-fields">
                <h3>Детали</h3>
                <div className="woocommerce-additional-fields__field-wrapper">
                  <p className="form-row notes area" id="order_comments_field" data-priority="">
                    <label htmlFor="order_comments">Примечание к заказу<span className="optional">(необязательно)</span></label>
                    <textarea name="order_comments" className="input-text" name="additional" onChange={onChangeHandler} id="order_comments"></textarea>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="checkout-wrapper">
        <div className="checkout-total">
          <div className="checkout-total__item">
            <div className="checkout-total__label">Время доставки</div>
            <div className="checkout-total__value" id="checkout-pop__time">~30 мин</div>
          </div>
          <div className="checkout-total__item">
            <div className="checkout-total__label">Итого</div>
            <div className="checkout-total__value"><span>15700 ₽</span>
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
    cart: state.asideReducer.cart,
    totalPrice: state.asideReducer.totalPrice,
    user: state.authReducer.user
  }
}
export default connect(mapStateToProps)(Modal)
