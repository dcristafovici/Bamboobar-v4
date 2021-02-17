import React from "react";

const AsideDelivery = ({total, address, percent}) => {
  return (
    <React.Fragment>

      <div className="aside-delivery">
        <div className="aside-delivery__min">
          заказ по данному адресу возможен от
          <span id="min_delivery"> {address.deliveryMin}</span> ₽
        </div>

        {address.deliveryMin - total > 0 ? (
          <div className="aside-delivery__name">
            <span>Закажите ещё на
            <span id="remaind"> {address.deliveryMin - total} </span> ₽ для бесплатной доставки
            </span>
          </div>
        ) : ""}

        <div className="aside-delivery__count">
         <span>{total} ₽</span>
          <span>
           {address.deliveryMin} ₽
          </span>
        </div>
        <div className="aside-delivery__line">
          <div className="aside-delivery__fill" style={{width: percent + '%'}}>
            <span>{total}</span>
          </div>
        </div>
      </div>
      <div className="aside-delivery__info">
        <div className="aside-info__item"><span>Время доставки</span><span>~{address.deliveryTime}</span>
        </div>
        <div className='aside-info__item'>
          <span>Итого</span>
          <span id="total-amount" className='total-amount'>
            <span>
              {total} ₽
              {(address.deliveryTaxi && address.taxiPrice && address.deliveryNotPay - total > 0) ? (
                <span className="small">+{address.taxiPrice} ₽ доставка</span>
              ): ""}
            </span>
          </span>
        </div>

      </div>

    </React.Fragment>
  )
}


export default AsideDelivery
