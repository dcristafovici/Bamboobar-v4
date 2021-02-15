import React from "react"
import {connect} from "react-redux"

const AsideTaxi = (address) => {
  if(address.address.taxiDistance){
    return(
      <div className="aside-item aside-item__taxi">
        <div className="aside-item__name"><span>Доставка - {address.address.taxiDistance}</span></div>
        <div className="aside-item__right">
          <span className='amount'>{address.address.taxiPrice}  ₽ </span>
          <span>Для бесплатной доставки сумма заказа должна быть больше {address.address.deliveryNotPay}</span>
        </div>
      </div>
    )
  } else return false
}

const mapStateToProps = (state) => {
  return{
    address : state.addressReducer
  }
}

export default connect(mapStateToProps)(AsideTaxi)
