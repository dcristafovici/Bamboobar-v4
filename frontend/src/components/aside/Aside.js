import React, {useState, useEffect} from "react"
import {connect} from 'react-redux'
import AsideControl from "./AsideControl";
import AsideItems from "./AsideItems";
import AsideDelivery from "../catalog/AsideDelivery";
import AsideDeliveryButton from "./AsideDeliveryButton";
import {setTotal, setPercent} from "../../redux/actions/asideAction";


const Aside = ({cart, setTotal, setPercent, total, address, percent}) => {
  useEffect(() => {
    let totalPrice = 0;
    cart.forEach(product => {
      totalPrice += address.deliverySale ? product.priceGroupWithSale : product.priceGroup;
    })
    setTotal(totalPrice)
  }, [cart])

  useEffect(() => {
    let percent = total / address.deliveryMin * 100
    setPercent(percent)
  }, [total])

  return (
    <aside className="aside aside-ready">
      <AsideControl address={address}/>
      <AsideItems
        cart={cart}
        isSale={address.deliverySale ? true : false}
      />
      <AsideDelivery total={total} percent={percent} address={address}/>
      <AsideDeliveryButton/>
    </aside>
  )
}


const mapStateToProps = (state) => {
  return {
    cart: state.asideReducer.cart,
    total: state.asideReducer.total,
    percent: state.asideReducer.percent,
    address: state.addressReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTotal: (total) => dispatch(setTotal(total)),
    setPercent: (percent) => dispatch(setPercent(percent))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside)
