import React, {useState, useEffect} from "react";
import {connect} from 'react-redux'

const AsideDelivery = ({sale, addressReducer, total, percent}) => {
  return (
    <React.Fragment>

      <div className="aside-delivery">
        <div className="aside-delivery__min">
          заказ по данному адресу возможен от
          <span id="min_delivery">{addressReducer.deliveryMin}</span> ₽
        </div>
        {(addressReducer.deliveryPay) ? (
          <div className="aside-delivery__name">
            <span>Закажите ещё на
            <span id="remaind"> </span> ₽ для бесплатной доставки
            </span>
          </div>
        ) : ""}

        <div className="aside-delivery__count">
          {sale ? ( <span>{sale}</span> ) : (<span>{total}</span>)}
          <span>
           {addressReducer.deliveryMin} ₽
          </span>
        </div>
        <div className="aside-delivery__line">
          <div className="aside-delivery__fill" style={{width: percent + '%'}}>
            {sale ? ( <span>{sale} ₽</span> ) : (<span>{total} ₽</span>)}
          </div>
        </div>
      </div>
      <div className="aside-delivery__info">
        <div className="aside-info__item"><span>Время доставки</span><span>~{addressReducer.deliveryTime}</span>
        </div>
        <div className={"aside-info__item " + (sale ? "aside-item__sale" : "")}>
          <span>Итого</span>
          <span id="total-amount" className='total-amount'>
            {sale ? (
              <span>{sale} ₽</span>
            ) : ""}
            <span>{total} ₽</span>
          </span>
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    addressReducer: state.addressReducer
  }
}

export default connect(mapStateToProps)(AsideDelivery)
