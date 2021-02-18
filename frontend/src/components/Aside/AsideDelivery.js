import React from "react"
import {connect} from 'react-redux'

const AsideDelivery = ({ addressReducer, asideReducer }) => {
  const differencePrice = addressReducer.withoutPayDelivery - asideReducer.total
  return (
    <React.Fragment>
      <div className="aside-delivery">
        <div className="aside-delivery__min">
          заказ по данному адресу возможен от
          <span id="min_delivery"> {addressReducer.minCount}</span> ₽
        </div>
        {(addressReducer.useTaxi && differencePrice > 0) ? (
          <div className="aside-delivery__name">
            <span>Закажите ещё на
                  <span id="remaind"> {differencePrice} ₽ </span>
                   для бесплатной доставки
            </span>
          </div>
        ) : ""}


        <div className="aside-delivery__count">
          <span>{asideReducer.total} ₽</span>
          <span>
           {addressReducer.minCount} ₽
          </span>
        </div>
        <div className="aside-delivery__line">
          <div className="aside-delivery__fill" style={{width: asideReducer.percent + '%'}}>
            <span>{asideReducer.total}  ₽</span>
          </div>
        </div>
      </div>
      <div className="aside-delivery__info">
        <div className="aside-info__item"><span>Время доставки</span><span>~{addressReducer.time}</span>
        </div>
        <div className='aside-info__item'>
          <span>Итого</span>
          <span id="total-amount" className='total-amount'>
            <span>
              {asideReducer.total} ₽
              {(addressReducer.useTaxi && addressReducer.taxiPrice && addressReducer.withoutPayDelivery - asideReducer.total > 0) ? (
                <span className="small">+{addressReducer.taxiPrice} ₽ доставка</span>
              ): ""}
            </span>
          </span>
        </div>

      </div>

    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return{
    addressReducer: state.addressReducer,
    asideReducer: state.asideReducer
  }
}

export default connect(mapStateToProps)(AsideDelivery)
