import React from "react"
import Order from "../modal/Order";
import {connect} from 'react-redux'
import {openRegister} from "../../redux/actions/modalAction";
const AsideDeliveryButton = ({address, pickup, user, openRegister, total, cart, time, isSale, isDelivery, deliveryPrice, typename}) => {
  return(
  <div className="aside-delivery__button">
    {address.address ? (
      <>
        {(user) ? (
          <Order
            cart={cart}
            total={(isDelivery && address.deliveryNotPay - total > 0) ? total + deliveryPrice : total}
            time={time}
            isSale={isSale}
            isDelivery={isDelivery}
            deliveryPrice={deliveryPrice}
            typename={typename} />
        ) : (
          <>
            <div onClick={() => openRegister()} className={"button button-checkout"}>
              <span>Оформить заказ</span>
            </div>
            <div href="#" className={'button button-checkout'}>
              <span>Самовывоз</span>
            </div>
          </>
        )}

      </>
    ) : (
      <>
        {(pickup) ? (
          <div href="#" className='button button-checkout'>
            <span>Самовывоз</span>
          </div>
        ) : (
          <a href="#banner" className="button button-checkout">
            <span>Указать адресс</span>
          </a>
        )}

      </>
    )}
  </div>
  )
}


const mapStateToProps = (state) => {
  return{
    pickup: state.addressReducer.pickup,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    openRegister: () => dispatch(openRegister())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AsideDeliveryButton)
