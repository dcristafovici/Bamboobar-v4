import React from "react";


const NotWorking = () => {
  return(
    <div id="worktime" className="worktime">
      <div className="worktime-title">Ресторан принимает заказы:</div>
      <ul className="worktime-list">
        <li>Пн-Пт - с 8 утра до 6 утра.</li>
        <li>Сб-Вс - с 11 до 6 утра</li>
      </ul>
      <p>Будем рады выполнить ваши заказы в рабочее время!</p>
    </div>
  )
}

export default NotWorking
