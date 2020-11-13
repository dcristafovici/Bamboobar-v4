import React, {useEffect, useState, useContext} from "react"
import axios from "axios";
import CatalogPoint from "../components/catalog/CatalogPoint";
import Aside from "../components/aside/Aside";
import Header from "../components/header/Header";

const Home = () =>{

  const [categories, setCategories] = useState([])

  let loadingCategories = false
  useEffect(()=>{
    axios
      .get('/api/category/categories')
      .then(result => setCategories(result.data.data))
    loadingCategories = true
  }, [])



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
                <div className="banner-find">
                  <h1>Быстрая Доставка из лучшего ресторана<br/>в москва-СИТИ bamboo.bar</h1>
                  <div className="form-group ">
                    <input id="suggest" placeholder="Укажите адрес доставки..." autoComplete="off"/>
                      <div className="form-group__clear">
                        <span>Изменить</span>
                        <img
                          src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/banner/pencil.svg"
                          alt="" />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="catalog">
        <div className="content">
          <div className="catalog-wrapper">
            <div className="catalog-main">

              {!loadingCategories && <CatalogPoint categories={categories}/>}
            </div>
            <Aside/>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="content">
          <div className="footer-wrapper">
            <div className="footer-left">
              <div className="footer-logo">
                <a href="index.html" className="logo">
                  <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/banner/logo.svg"
                       alt="Logo" />
                </a>
              </div>
              <div className="footer-contacts">
                <ul>
                  <li>
                    <a href="tel:7 (985) 766-49-62" target="_blank">
                      <img
                        src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/footer/f1.svg"
                        alt="Footer" /><span>7 (985) 766-49-62</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:" target="_blank">
                      <img
                        src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/footer/f2.svg"
                        alt="Footer" /><span>Написать нам</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img
                        src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/footer/f3.svg"
                        alt="Footer" /><span>Москва, Пресненская наб., 8, стр. 1</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-socials">
              <ul>
                <li>
                  <a href="#" target="_blank">
                    <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/footer/f4.svg"
                         alt="socials" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/footer/f5.svg"
                         alt="socials" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <nav className="footer-menu">
                <ul>
                  <li><a href="#">топ 10 блюд</a>
                  </li>
                  <li><a href="#">Салаты</a>
                  </li>
                  <li><a href="#">холодные закуски </a>
                  </li>
                  <li><a href="#">горячие закуски</a>
                  </li>
                  <li><a href="#">пицца</a>
                  </li>
                </ul>
                <ul>
                  <li><a href="#">рис и лапша</a>
                  </li>
                  <li><a href="#">супы</a>
                  </li>
                  <li><a href="#">горячие мясные</a>
                  </li>
                  <li><a href="#">горячие рыбные</a>
                  </li>
                  <li><a href="#">гарниры</a>
                  </li>
                </ul>
                <ul>
                  <li><a href="#">гункан</a>
                  </li>
                  <li><a href="#">птица</a>
                  </li>
                  <li><a href="#">дим самы</a>
                  </li>
                  <li><a href="#">спринг роллы</a>
                  </li>
                  <li></li>
                </ul>
                <ul>
                  <li><a href="#">роллы</a>
                  </li>
                  <li><a href="#">сашими</a>
                  </li>
                  <li><a href="#">десерты</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="coph">© 2010–2020, официальный сайт ДОСТАВКИ ИЗ РЕСТОРАНА BAMBOOBAR</div>
        </div>
      </section>
      <div className="add-info">
        <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/footer/check.svg" alt="" />
          <span>Товар добавлен</span>
      </div>
      <div id="sp-up" >
        <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/footer/up.svg" alt="Up" />
      </div>
      <div id="auth" className="auth">
        <form action="sendinfo.php" method="POST" className="form">
          <div className="form-group">
            <input type="text" placeholder="Номер телефона" />
          </div>
          <div className="form-group">
            <button className="button">
              <span>Отправить</span>
            </button>
          </div>
        </form>
      </div>


      <div className="bamboo-error" id="bamboo-error">
        <h2>Укажите ваш адрес</h2>
        <p>Укажите адрес доставки, в приделах МКАД</p>
        <div className="button"><span>Указать адрес</span></div>
      </div>

      <div className="bamboo-error" id="toofar">
        <h2>Укажите адрес доставки, в приделах МКАД</h2>
      </div>
    </main>
  )
}

export default Home
