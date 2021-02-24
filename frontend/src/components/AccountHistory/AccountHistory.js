import React,{useEffect} from "react"
import {useDispatch, useSelector} from 'react-redux'
import {listOrders} from "../../redux/actions/orderAction";

const AccountHistory = ({user}) =>{
  const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря" ];
  const dispatch = useDispatch()
  const orderList = useSelector(state => state.orderReducer)
  let { loading , errors, orders } = orderList
    useEffect(() => {
      if(user){
        dispatch(listOrders(user._id))
      }
    }, [dispatch , user])

  return(
    <div className="account-item account-history">
      <div className="account-item__name">История заказов</div>
      <div className="account-history__legend">
        <ul>
          <li>Дата</li>
          <li>Адресс доставки</li>
          <li>Статус</li>
          <li>Сумма заказа</li>
        </ul>
      </div>
      <div className="account-history-items">
        {orders.map((order, index) => {
          let date = new Date(order.create)
          return(
            <div className='account-history__group' key={index}>
              <div className="account-history__item">
                <div className="account-history__time">{date.getDate()} { monthNames[date.getMonth()]} {date.getFullYear()}</div>
                <div className="account-history__address">{order.address}</div>
                <div className="account-history__status" data-status={order.orderStatus}>
                  <span>{(order.orderStatus === "0") ? "Не оплачен" : 'Оплачен'    }</span>
                </div>
                <div className="account-history__price">{parseFloat(order.price) + parseFloat(order.taxiPrice)} ₽</div>
              </div>
              <div className='account-history__products'>
                <div className="account-product">
                  <div className="account-product__name">Название продукта</div>
                  <div className="account-product__quantity">Количество</div>
                  <div className="account-product__price">Стоимость единицы</div>
                  <div className="account-product__total">Итого</div>
                </div>
                {order.products.map((product, index) => {
                  return(
                    <div className="account-product" key={index}>
                      <div className="account-product__name">{product.name}</div>
                      <div className="account-product__quantity">{product.quantity}</div>
                      <div className="account-product__price">{product.priceItem} ₽</div>
                      <div className="account-product__total">{product.priceGroup} ₽</div>
                    </div>
                  )
                })}
                {(parseFloat(order.taxiPrice)) ? (
                  <div className="account-product account-product__taxi">
                    <div className="account-product__name">Доставка</div>
                    <div className="account-product__quantity">1</div>
                    <div className="account-product__price">{order.taxiPrice} ₽</div>
                    <div className="account-product__total">{order.taxiPrice} ₽</div>
                  </div>
                ) : ""}

              </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default AccountHistory
