import React from "react"
import Order from "../modal/Order";
import {connect} from 'react-redux'
import {openRegister} from "../../redux/actions/modalAction";

const AsideDeliveryButton = ({ addressReducer , user, asideReducer, openRegister }) => {
  const typename = (asideReducer.total > addressReducer.minCount) ? "" : "notedit"
  return (
    <div className="aside-delivery__button">
    {(user) ? (
      <Order
        cart={asideReducer.cart}
        total={asideReducer.total}
        time={addressReducer.time}
        typename={typename}
        isSale={addressReducer.sale ? true : false}
        isDelivery={addressReducer.useTaxi ? true : false}
        deliveryPrice={addressReducer.taxiPrice}
      />
    ): (
      <div onClick={() => openRegister()} className={"button button-checkout " + typename}>
        <span>Оформить заказ</span>
      </div>
    )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    addressReducer: state.addressReducer,
    asideReducer: state.asideReducer,
    user: state.authReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    openRegister: () => dispatch(openRegister())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AsideDeliveryButton)
