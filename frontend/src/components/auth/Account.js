import React from "react"
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Account = () => {
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
                <div className="account-item__info">
                  <ul>
                    <li><span>Имя:</span><span>Антонов Антон</span>
                    </li>
                    <li><span>Email:</span><span>Не указан</span>
                    </li>
                    <li><span>Телефон:</span><span>Не указан</span>
                    </li>
                    <li><span>Пол</span><span>Не указан</span>
                    </li>
                    <li><span>Дата рождения:</span><span>Не указан</span>
                    </li>
                  </ul>
                </div>
                <div className="account-item__button">
                  <button className="button button-gray"><span>Редактировать</span>
                  </button>
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
                    <input type="text" defaultValue="ул. Тверская, д.11, корп.2 , кв.33" />
                      <div className="form-row">
                        <div className="form-group">
                          <label>Дом</label>
                          <input type="text" />
                        </div>
                        <div className="form-group">
                          <label>Квартира</label>
                          <input type="text" />
                        </div>
                        <div className="form-group">
                          <label>Подъезд</label>
                          <input type="text" />
                        </div>
                        <div className="form-group">
                          <label>Домофон</label>
                          <input type="text" />
                        </div>
                        <div className="form-group">
                          <label>Этаж</label>
                          <input type="text" />
                        </div>
                      </div>
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
                <div className="account-history__wrapper">
                  <div className="account-history__left">
                    <div className="account-history__years">
                      <ul>
                        <li><span>2018</span>
                        </li>
                        <li className="active"><span>2019</span>
                        </li>
                        <li><span>2020</span>
                        </li>
                      </ul>
                    </div>
                    <div className="account-history__date">
                      <ul>
                        <li><span>7 сентября</span>
                        </li>
                        <li className="active"><span>23 сентября</span>
                        </li>
                        <li><span>4 октября</span>
                        </li>
                        <li><span>22 октября</span>
                        </li>
                        <li><span>28 октября</span>
                        </li>
                        <li><span>4 декабря</span>
                        </li>
                        <li><span>10 декабря</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="account-history__right">
                    <div className="account-history__name">Заказы от 23.09.2020:</div>
                    <div className="account-history__items">
                      <div className="account-history__item">
                        <div className="history-item__name"><span>№ 234 (Время заказа 23:00)</span><a
                          href="#">Повторить</a>
                        </div>
                        <div className="history-item__content">
                          <div className="history-item__slides">
                            <div className="history-item__slide">
                              <div className="history-product">
                                <div className="history-product__photo">
                                  <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/account/a1.jpg" alt="Account" />
                                </div>
                                <div className="history-product__name"><span>Креветки васаби с дайконом, морковью и лепестками ...</span>
                                </div>
                                <div className="history-product__btm"><span>300 г</span><span>890 ₽</span>
                                </div>
                              </div>
                            </div>
                            <div className="history-item__slide">
                              <div className="history-product">
                                <div className="history-product__photo">
                                  <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/account/a1.jpg" alt="Account" />
                                </div>
                                <div className="history-product__name"><span>Креветки васаби с дайконом, морковью и лепестками ...</span>
                                </div>
                                <div className="history-product__btm"><span>300 г</span><span>890 ₽</span>
                                </div>
                              </div>
                            </div>
                            <div className="history-item__slide">
                              <div className="history-product">
                                <div className="history-product__photo">
                                  <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/account/a1.jpg" alt="Account"/>
                                </div>
                                <div className="history-product__name"><span>Креветки васаби с дайконом, морковью и лепестками ...</span>
                                </div>
                                <div className="history-product__btm"><span>300 г</span><span>890 ₽</span>
                                </div>
                              </div>
                            </div>
                            <div className="history-item__slide">
                              <div className="history-product">
                                <div className="history-product__photo">
                                  <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/account/a1.jpg" alt="Account"/>
                                </div>
                                <div className="history-product__name"><span>Креветки васаби с дайконом, морковью и лепестками ...</span>
                                </div>
                                <div className="history-product__btm"><span>300 г</span><span>890 ₽</span>
                                </div>
                              </div>
                            </div>
                            <div className="history-item__slide">
                              <div className="history-product">
                                <div className="history-product__photo">
                                  <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/account/a1.jpg" alt="Account"/>
                                </div>
                                <div className="history-product__name"><span>Креветки васаби с дайконом, морковью и лепестками ...</span>
                                </div>
                                <div className="history-product__btm"><span>300 г</span><span>890 ₽</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer/>
    </main>
  )
}
export default Account
