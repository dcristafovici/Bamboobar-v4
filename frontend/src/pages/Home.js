import React from "react"
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Find from "../components/find/Find";
import Catalog from "../components/catalog/Catalog";

const Home = () =>{
  return(
    <main className="bamboobar-main">
      <Header/>
      <div className="fixed-menu">
        <div className="content">

          <nav className="fixed-nav">
            <ul>

              <li>
                <a href="#" data-id="0">Завтраки</a>
              </li>

              <li>
                <a href="#" data-id="1">Сезонное меню</a>
              </li>

              <li>
                <a href="#" data-id="2">Салаты</a>
              </li>

              <li>
                <a href="#" data-id="3">Ассорти</a>
              </li>

              <li>
                <a href="#" data-id="4">Салаты с морепродуктами</a>
              </li>

              <li>
                <a href="#" data-id="5">Салаты овощные</a>
              </li>

              <li>
                <a href="#" data-id="6">Холодные закуски</a>
              </li>

              <li>
                <a href="#" data-id="7">Гункан суши</a>
              </li>
            </ul>
            <ul>
              <li className="item-more"><span href="#">Ещё</span>
                <ul className="item-dropdown">
                  <li>
                    <a href="#" data-id="8">Суши</a>
                  </li>
                  <li>
                    <a href="#" data-id="9">Сашими</a>
                  </li>
                  <li>
                    <a href="#" data-id="10">Роллы</a>
                  </li>
                  <li>
                    <a href="#" data-id="11">Живые морепродукты</a>
                  </li>
                  <li>
                    <a href="#" data-id="12">Морепродукты на пару/гриле</a>
                  </li>
                  <li>
                    <a href="#" data-id="13">Горячие закуски</a>
                  </li>
                  <li>
                    <a href="#" data-id="14">Спринг роллы</a>
                  </li>
                  <li>
                    <a href="#" data-id="15">Дим сам</a>
                  </li>
                  <li>
                    <a href="#" data-id="16">Пицца</a>
                  </li>
                  <li>
                    <a href="#" data-id="17">Супы</a>
                  </li>
                  <li>
                    <a href="#" data-id="18">Рис и лапша</a>
                  </li>
                  <li>
                    <a href="#" data-id="19">Том-Кха</a>
                  </li>
                  <li>
                    <a href="#" data-id="20">Том-Ям</a>
                  </li>
                  <li>
                    <a href="#" data-id="21">Горячие рыбные блюда</a>
                  </li>
                  <li>
                    <a href="#" data-id="22">Горячие мясные блюда</a>
                  </li>
                  <li>
                    <a href="#" data-id="23">Птица</a>
                  </li>
                  <li>
                    <a href="#" data-id="24">Гарниры</a>
                  </li>
                  <li>
                    <a href="#" data-id="25">Десерты</a>
                  </li>
                  <li>
                    <a href="#" data-id="26">Конфеты ручной работы</a>
                  </li>
                  <li>
                    <a href="#" data-id="27">Мороженое</a>
                  </li>
                  <li>
                    <a href="#" data-id="28">Сорбеты</a>
                  </li>

                </ul>
              </li>
            </ul>
          </nav>

        </div>
      </div>
      <div className="main-reverse">
        <section className="menu">
          <div className="content">
            <nav className="menu-nav">
              <ul>

                <li>
                  <a href="#" data-id="0">Завтраки</a>
                </li>
                <li>
                  <a href="#" data-id="1">Сезонное меню</a>
                </li>
                <li>
                  <a href="#" data-id="2">Салаты</a>
                </li>
                <li>
                  <a href="#" data-id="3">Ассорти</a>
                </li>
                <li>
                  <a href="#" data-id="4">Салаты с морепродуктами</a>
                </li>
                <li>
                  <a href="#" data-id="5">Салаты овощные</a>
                </li>
                <li>
                  <a href="#" data-id="6">Холодные закуски</a>
                </li>
                <li>
                  <a href="#" data-id="7">Гункан суши</a>
                </li>
              </ul>
              <ul>
                <li className="item-more"><span href="#">Ещё</span>
                  <ul className="item-dropdown">
                    <li>
                      <a href="#" data-id="8">Суши</a>
                    </li>
                    <li>
                      <a href="#" data-id="9">Сашими</a>
                    </li>
                    <li>
                      <a href="#" data-id="10">Роллы</a>
                    </li>
                    <li>
                      <a href="#" data-id="11">Живые морепродукты</a>
                    </li>
                    <li>
                      <a href="#" data-id="12">Морепродукты на пару/гриле</a>
                    </li>
                    <li>
                      <a href="#" data-id="13">Горячие закуски</a>
                    </li>
                    <li>
                      <a href="#" data-id="14">Спринг роллы</a>
                    </li>
                    <li>
                      <a href="#" data-id="15">Дим сам</a>
                    </li>
                    <li>
                      <a href="#" data-id="16">Пицца</a>
                    </li>
                    <li>
                      <a href="#" data-id="17">Супы</a>
                    </li>
                    <li>
                      <a href="#" data-id="18">Рис и лапша</a>
                    </li>
                    <li>
                      <a href="#" data-id="19">Том-Кха</a>
                    </li>
                    <li>
                      <a href="#" data-id="20">Том-Ям</a>
                    </li>
                    <li>
                      <a href="#" data-id="21">Горячие рыбные блюда</a>
                    </li>
                    <li>
                      <a href="#" data-id="22">Горячие мясные блюда</a>
                    </li>
                    <li>
                      <a href="#" data-id="23">Птица</a>
                    </li>
                    <li>
                      <a href="#" data-id="24">Гарниры</a>
                    </li>
                    <li>
                      <a href="#" data-id="25">Десерты</a>
                    </li>
                    <li>
                      <a href="#" data-id="26">Конфеты ручной работы</a>
                    </li>
                    <li>
                      <a href="#" data-id="27">Мороженое</a>
                    </li>
                    <li>
                      <a href="#" data-id="28">Сорбеты</a>
                    </li>

                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section className="banner" id="banner">
          <div className="content">
            <div className="banner-wrapper">
              <div className="banner-image">
                <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/banner/banner.jpg"
                     alt="Banner JPG"/>
              </div>
              <div className="banner-content">
                <div className="banner-logo">
                  <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/banner/logo.svg"
                       alt="Logo"/>
                </div>
                <Find/>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Catalog />
      <Footer/>
    </main>
  )
}

export default Home
