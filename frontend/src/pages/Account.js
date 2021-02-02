import React from 'react'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AccountInfo from "../components/AccountInfo/AccountInfo";
import AccountHistory from "../components/AccountHistory/AccountHistory";
import {connect} from 'react-redux'

const Account = ({user}) => {
  return(
    <main className="bamboobar-main">
    <Header/>
    <section className="account">
      <div className="content">
        <div className="title">
          <h1>Личный кабинет</h1>
        </div>
        <div className="account-wrapper">
          <div className="account-items">
            <AccountInfo user={user}/>
            <div className="account-item account-address">
              <div className="account-item__name">Адрес доставки</div>
              <div className="account-address__top">
                <div className="account-address__left">
                  <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/account/map.jpg" alt="Address" />
                </div>
                <div className="account-address__right">
                  <p>* Улица</p>
                  <input type="text" defaultValue={(user ? user.address : "")}/>
                </div>
              </div>
              <div className="account-address__bottom"><span>Комментарии</span>
                <textarea placeholder="Просьба за 20 минут до приезда позвонить, потребуется открыть ворота"></textarea>
              </div>
            </div>
            <div className="account-item account-delivery">
              <div className="account-item__name">Условия доставки:</div>
              <div className="account-delivery__span"><span>Сумма доставки расчитываеться автоматически по адресу</span>
              </div>
              <h2>Тариф доставки:</h2>
              <div className="account-delivery__items">
                <div className="account-delivery__item">
                  <span>по Москва-Сити </span>
                  <p>БЕСПЛАТНО (от 1500 руб.)</p>
                </div>
                <div className="account-delivery__item">
                  <span>в радиусе ~10 км от Москва Сити</span>
                  <p>БЕСПЛАТНО (от 5 000 руб.)</p>
                </div>
                <div className="account-delivery__item">
                  <span>по Москве (в приделах МКАД) </span>
                  <p>от 3 000 руб (стоимость доставки 500 руб.) свыше 10 000 руб. - БЕСПЛАТНО</p>
                </div>
              </div>
            </div>
            <AccountHistory />
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </main>
  )
}

const mapStateToProps = (state) => {
  return{
    user :  state.authReducer.user
  }
}

export default connect(mapStateToProps)(Account)
