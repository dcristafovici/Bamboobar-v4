import React, {useState, useEffect} from "react";
import {connect} from 'react-redux'
import AsideItem from "./AsideItem";
import Order from "../modal/Order";
import AsideDelivery from "../catalog/AsideDelivery";
import AsideTaxi from "./AsideTaxi";
import {openRegister} from "../../redux/actions/modalAction";
import {emptyCart} from "../../redux/actions/asideAction";
import {deliveryOFF, deliveryON, setTaxiInfo} from "../../redux/actions/addressAction";
import axios from "axios";

const Aside = ({cart, address, addressReducer, setTaxiInfo, deliveryOn, deliveryOff, user, openRegister, emptyCart}) => {

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

    if(totalPrice > addressReducer.deliveryNotPay){
      deliveryOff()
    } else{deliveryOn()}
  }, [cart])


  useEffect(() => {
    if(addressReducer.deliverySale){
      setSale(total - total * .20)
    }
  }, [total])


  useEffect(() => {
    if(addressReducer.address){
      const findTaxiPrice  = async() => {
        try{
          const response = await axios.post('/api/find/route', {bamboo: addressReducer.bambooCoords, coords : addressReducer.addressCoords})
          const priceTaxi = parseFloat(response.data.service_levels[0].description_parts.value)
          setTaxiInfo(response.data.distance, priceTaxi)
        } catch (err){
          console.log(err)
        }
      }
        findTaxiPrice()
      }
  }, [addressReducer.address])

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
            {(sale || !addressReducer.deliveryMode) ? ("") : (
              <AsideTaxi/>
            )}

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
                isDelivery={addressReducer.deliveryMode ? true : false}
                deliveryPrice={addressReducer.taxiPrice ? addressReducer.taxiPrice : ""}
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
    emptyCart: () => dispatch(emptyCart()),
    setTaxiInfo: (taxiDistance, taxiPrice) => dispatch(setTaxiInfo(taxiDistance, taxiPrice)),
    deliveryOn : () => dispatch(deliveryON()),
    deliveryOff : () => dispatch(deliveryOFF())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside)
