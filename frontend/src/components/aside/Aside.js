import React, {useState, useEffect} from "react";
import {connect} from 'react-redux'
import AsideItem from "./AsideItem";
import Order from "../modal/Order";
import AsideDelivery from "../catalog/AsideDelivery";
import {openRegister} from "../../redux/actions/modalAction";
import {emptyCart} from "../../redux/actions/asideAction";
import axios from "axios";

const Aside = ({cart, address, addressReducer, user, openRegister, emptyCart}) => {

  const [total, setTotal] = useState("0")
  const [sale, setSale] = useState(0)
  const [percent, setPercent] = useState("0")


  useEffect(() => {
    let totalPrice = 0;
    if(!cart.length){
      setTotal(0)
    }
    cart.forEach(item => {
      totalPrice += item.priceGroup;
      setTotal(totalPrice)
    })
    setPercent(totalPrice / addressReducer.deliveryMin * 100)
  }, [cart])


  useEffect(() => {
    if(addressReducer.deliverySale){
      setSale(total - total * .20)
    }
  }, [total])

  useEffect( () => {
    const data = JSON.stringify({
      "route": [[55.746697, 37.539020] , [55.737557, 37.516368]],
      "skip_estimated_waiting": true,
      "supports_forced_surge": false
    })

    const config = {
      method: "POST",
      url: "https://taxi.yandex.ru/3.0/routestats",
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      },
      data: data
    }

    axios(config)
      .then(function (response) {
        console.log(`Маршрут составит ${response.data.distance} и займет ${response.data.time}`);
        response.data.service_levels.forEach(function (i) {
          console.log(`${i.name} - ${i.price}`);
        })
      })
      .catch(function (error) {
        console.log(error);
      });


  }, [])

  return (
    <aside className="aside aside-ready">
      <div className="aside-control">
        <div className="aside-title"><span>Мой заказ</span>
        </div>
        <div className="aside-close" onClick={() => emptyCart()}>
          <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/aside/close.svg"
               alt="Close"/>
        </div>
        {(addressReducer.deliverySale) ? (
          <div className="aside-sale">Скидка 20% активировано </div>
        ) : ""}
      </div>
      {address ? (
        <>
          <div className="aside-items">
            {cart.map((item, index) => {
              return (
                <AsideItem
                  key={index}
                  item={item}
                  isSale={sale ? true : false}
                />
              )
            })}
          </div>
          <AsideDelivery total={total} sale={sale} percent={percent} cart={cart}/>
        </>
      ) : ""}
      <div className="aside-delivery__button">

        {address ? (
          <>
            {(user) ? (
              <Order
                cart={cart}
                total={sale ? sale : total}
                time={addressReducer.deliveryTime}
                isSale={sale ? true: false}
                typename={addressReducer.deliveryMin > total ? 'notedit' : ""}/>
            ) : (
              <div onClick={() => openRegister()} className={"button button-checkout"}>
                <span>Оформить заказ</span>
              </div>
            )}

          </>
        ) : (
          <a href="#banner" className="button button-checkout">
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
  return {
    openRegister: () => dispatch(openRegister()),
    emptyCart: () => dispatch(emptyCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside)
