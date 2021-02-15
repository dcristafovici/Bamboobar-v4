import React from "react"
import Order from "../modal/Order";
import {connect} from 'react-redux'
import {openRegister} from "../../redux/actions/modalAction";
const AsideDeliveryButton = ({address, user, openRegister, total, cart, time, isSale, isDelivery, deliveryPrice, typename}) => {
  return(
  <div className="aside-delivery__button">
    {address.address ? (
      <>
        {(user) ? (
          <Order
            cart={cart}
            total={isDelivery ? total + deliveryPrice : total}
            time={time}
            isSale={isSale}
            isDelivery={isDelivery}
            deliveryPrice={deliveryPrice}
            typename={typename} />
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
  )
}


const mapStateToProps = (state) => {
  return{

  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    openRegister: () => dispatch(openRegister())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AsideDeliveryButton)
