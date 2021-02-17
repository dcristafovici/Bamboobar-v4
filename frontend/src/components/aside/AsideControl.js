import React from 'react'
import {connect} from  'react-redux'
import {emptyCart} from "../../redux/actions/asideAction";
const AsideControl = ({address, clearCart}) => {
  return(
    <div className="aside-control">
      <div className="aside-title"><span>Мой заказ</span>
      </div>
      <div className="aside-close" onClick={() => clearCart()}>
        <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/aside/close.svg"
             alt="Close"/>
      </div>
      {(address.deliverySale) ? (
        <div className="aside-sale">Скидка 20% активировано </div>
        ): ""}
    </div>
  )
}

const mapStateToProps = state => {
  return{}
}
const mapDispatchToProps = dispatch => {
  return{
    clearCart: () => dispatch(emptyCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsideControl)
