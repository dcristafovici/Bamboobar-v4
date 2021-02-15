import React from 'react'

const AsideControl = ({address}) => {
  return(
    <div className="aside-control">
      <div className="aside-title"><span>Мой заказ</span>
      </div>
      <div className="aside-close" >
        <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/aside/close.svg"
             alt="Close"/>
      </div>
      {(address.deliverySale) ? (
        <div className="aside-sale">Скидка 20% активировано </div>
        ): ""}
    </div>
  )
}

export default AsideControl
