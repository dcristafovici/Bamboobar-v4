import React, {useEffect} from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import axios from "axios";

const Thanks = ({}) => {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const orderID = urlParams.get('orderID')
  const changeOrder = async() => {
    try{
      const change = await axios.post('/api/order/update', {id: orderID, status: 1})
      console.log(change)
    } catch (err){
      console.log(err)
    }
  }

  useEffect(()=> {
    changeOrder()
  }, [])
  return(
    <main className="bamboobar-main">
      <Header/>
      <section className="thanks">
        <div className="content">
          <div className="thanks-wrapper">
            <h2>Ваш заказ {orderID} сформирован!</h2>
            <p>Ваш заказ принят и сейчас готовится</p>
            <p>Вы можете просматривать историю заказов в Личном кабинете, открыв Историю заказов. </p>
            <p>Спасибо за покупки в нашем интернет-магазине!</p>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  )
}

export default Thanks
