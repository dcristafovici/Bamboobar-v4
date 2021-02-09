import React, {useState, useEffect} from "react";
import {connect} from 'react-redux'
import AsideItem from "./AsideItem";
import Order from "../modal/Order";
import AsideDelivery from "../catalog/AsideDelivery";

const Aside = ({cart, address, addressReducer}) => {

  const [total, setTotal] = useState("0")
  const [percent, setPercent] = useState("0")
  useEffect(() => {
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.priceGroup;
      setTotal(totalPrice)
    })
    setPercent(totalPrice/addressReducer.deliveryMin * 100)
  }, [cart])

  return (
    <aside className="aside aside-ready">
      <div className="aside-control">
        <div className="aside-title"><span>Мой заказ</span>
        </div>
        <div className="aside-close">
          <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/aside/close.svg"
               alt="Close"/>
        </div>
      </div>
      {address ? (
        <>
          <div className="aside-items">
            {cart.map((item, index) => {
              return (
                <AsideItem key={index} item={item}/>
              )
            })}
          </div>
          <AsideDelivery  total={total} percent={percent} cart={cart}/>
        </>
      ) : ""}
      <div className="aside-delivery__button">
        {address ? (
            <Order cart={cart} typename={addressReducer.deliveryMin > total ? 'notedit' : ""}/>
          ) : (
          <a href="#banner"  className="button button-checkout">
            <span>Указать адресс</span>
          </a>
          )}
      </div>
    </aside>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.asideReducer.cart,
    address: state.addressReducer.address,
    addressReducer: state.addressReducer,
    user: state.authReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside)
