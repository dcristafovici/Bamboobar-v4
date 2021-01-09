import React from 'react'
import Header from "../components/header/Header";
import {connect} from 'react-redux'
import Footer from "../components/footer/Footer";
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
            <div className="account-item">
              <div className="account-item__name">Личные данные</div>
              <div className="account-item__vertical">
              <div className="account-item__info">
                <ul>
                  <li><span>Имя:</span><span>{(user ? user.username : "")}</span>
                  </li>
                  <li><span>Email:</span><span>{(user ? user.email : "")}</span>
                  </li>
                  <li><span>Телефон:</span><span>{(user ? user.phone : "")}</span>
                  </li>
                </ul>
              </div>
              <div className="account-item__button">
                <button className="button button-gray"><span>Редактировать</span>
                </button>
              </div>
            </div>
            </div>
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
            <div className="account-item account-history">
              <div className="account-item__name">История заказов</div>
            </div>
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
