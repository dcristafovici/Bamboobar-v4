import React from 'react'
import Popup from "reactjs-popup";

const NotDelivery = () => {
  return(
    <Popup trigger={<span>Открыть попап</span>} modal>
      <div className="notdelivery-wrapper">
        <h2>Пожалуйста укажите адресс в пределах Москвы</h2>
      </div>
    </Popup>
  )
}

export default NotDelivery
