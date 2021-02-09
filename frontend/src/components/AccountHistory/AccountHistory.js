import React,{useEffect} from "react"
import {useDispatch, useSelector} from 'react-redux'
import {listOrders} from "../../redux/actions/orderAction";

const AccountHistory = ({user}) =>{
  const dispatch = useDispatch()

  const orderList = useSelector(state => state.orderReducer)
  const{ loading , errors, orders } = orderList
  useEffect(() => {
    dispatch(listOrders('6018d716c591a127b0b27c88'))
  }, [dispatch])

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
                <div className="account-history__time">{date.getDay()}.{date.getMonth()}.{date.getFullYear()}</div>
                <div className="account-history__address">{order.address}</div>
                <div className="account-history__status" data-status={order.orderStatus}>
                  <span>{(order.orderStatus === "0") ? "Не оплачен" : 'Оплачен'    }</span>
                </div>
                <div className="account-history__price">{order.price} ₽</div>
              </div>
              <div className='account-history__products'>
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
              </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default AccountHistory
