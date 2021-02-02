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
      <div className="account-item__legend">
        <ul>
          <li>#</li>
          <li>Дата</li>
          <li>Адресс доставки</li>
          <li>Статус</li>
          <li>Сумма заказа</li>
        </ul>
      </div>
      <div className="account-history-items">
        {orders.map((order, index) => {
          return(
            <div className="account-history__item" key={index}>
              <div className="account-history__count">{order._id}</div>
              <div className="account-history__time">{order.create}</div>
              <div className="account-history__address">{order.address}</div>
              <div className="account-history__status">Статус</div>
              <div className="account-history__price">{order.price}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AccountHistory
