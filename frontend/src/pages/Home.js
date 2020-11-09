import React, {useEffect, useState} from "react"
import CatalogPoint from "../components/catalog/CatalogPoint";
import axios from "axios";
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
      <header className="header">
        <div className="content">
          <div className="header-wrapper">
            <div className="header-logo">
              <a href="http://delivery.bamboobar.su" className="logo">
                <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/header/logo.svg"
                     alt="Logo"/>
              </a>
            </div>
            <div className="header-info">
              <ul>
                <li>30-60 мин</li>
                <li>от 1500 руб</li>
                <li>-20% в Москва-Сити</li>
              </ul>
            </div>
            <div className="header-status"><span>Принимаем заказы</span>
            </div>
            <div className="header-phone"><a href="tel:7 (985) 766-49-62">7 (985) 766-49-62</a>
            </div>
            <div className="header-account">
              <a href="#auth" data-fancybox="" className="header-account__top">
                <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/header/bear.png"
                     alt=""/>
                  <span>Личный кабинет</span>
              </a>

            </div>
            <div className="header-languages">
              <ul>
                <li className="active"><a href="#">RU</a>
                </li>
              </ul>
            </div>
            <div id="header-burger" className="header-burger">
              <button className="hamburger hamburger--collapse"><span className="hamburger-box"><span
                className="hamburger-inner"></span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
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
            <aside className="aside aside-ready" data-delivery="5000">
              <ul>
                <li>
                  <span>name:Фирменные сырники из домашнего творога с густой сметаной и ягодным соусом </span>
                  <span>price: 750 </span>
                  <span>quantity: 1</span>
                </li>
                <li>
                  <span>name:Пышные панкейки со сливочно-сметанным соусом, с малиной и голубикой </span>
                  <span>price: 450 </span>
                  <span>quantity: 2</span>
                </li>
                <li>
                  <span>name:Венские вафли с лепестками хрустящего миндаля и сгущенным молоком </span>
                  <span>price: 650 </span>
                  <span>quantity: 5</span>
                </li>
                <li>
                  <span>name:Творожная запеканка с кусочками персика и сладким соусом </span>
                  <span>price: 750 </span>
                  <span>quantity: 1</span>
                </li>
              </ul>
              <div className="aside-progress">
                <span> 0 </span>
                <span>  </span>
              </div>

              <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="aside-control">
                <div className="aside-title"><span>Мой заказ</span>
                </div>
                <a href="http://delivery.bamboobar.su?clear-cart" className="aside-close">
                  <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/aside/close.svg"
                       alt="Close" />
                </a>
              </div>
              <div className="aside-items mCustomScrollbar _mCS_1" >

                    <div className="aside-item" data-one="750₽" data-id="684">
                      <div className="aside-item__name"><span>Фирменные сырники из домашнего творога с густой сметаной и я...</span>
                      </div>
                      <div className="aside-item__change">
                        <div className="aside-plus"></div>
                        <input type="number" className="item-quantity" defaultValue="1" />
                          <div className="aside-minus remove"></div>
                      </div>
                      <div className="aside-item__right">
                        <span><span className="woocommerce-Price-amount amount"><bdi>750₽</bdi></span></span><span>750 г</span>
                      </div>
                    </div>

                    <div className="aside-item" data-one="450₽" data-id="679">
                      <div className="aside-item__name"><span>Пышные панкейки со сливочно-сметанным соусом, с малиной и го...</span>
                      </div>
                      <div className="aside-item__change">
                        <div className="aside-plus"></div>
                        <input type="number" className="item-quantity" defaultValue="2" />
                          <div className="aside-minus"></div>
                      </div>
                      <div className="aside-item__right">
                        <span><span className="woocommerce-Price-amount amount"><bdi>900 ₽</bdi></span></span><span>335 г</span>
                      </div>
                    </div>

                    <div className="aside-item" data-one="650₽" data-id="680">
                      <div className="aside-item__name"><span>Венские вафли с лепестками хрустящего миндаля и сгущенным мо...</span>
                      </div>
                      <div className="aside-item__change">
                        <div className="aside-plus"></div>
                        <input type="number" className="item-quantity" defaultValue="5" />
                          <div className="aside-minus"></div>
                      </div>
                      <div className="aside-item__right">
                        <span><span className="woocommerce-Price-amount amount"><bdi>3250 ₽</bdi></span></span><span>145 г</span>
                      </div>
                    </div>

                    <div className="aside-item" data-one="750₽" data-id="685">
                      <div className="aside-item__name">
                        <span>Творожная запеканка с кусочками персика и сладким соусом</span></div>
                      <div className="aside-item__change">
                        <div className="aside-plus"></div>
                        <input type="number" className="item-quantity" defaultValue="1" />
                          <div className="aside-minus remove"></div>
                      </div>
                      <div className="aside-item__right">
                        <span><span className="woocommerce-Price-amount amount"><bdi>750₽</bdi></span></span><span>200 г</span>
                      </div>
                    </div>
              </div>
              <div className="aside-delivery">
                <div className="aside-delivery__min">заказ по данному адресу возможен от <span
                  id="min_delivery">5000</span> ₽
                </div>
                <div className="aside-delivery__name" ><span>Закажите ещё на <span
                  id="remaind"></span> ₽ для бесплатной доставки</span>
                </div>
                <div className="aside-delivery__count"><span>0 ₽ </span><span>5000 ₽</span>
                </div>
                <div className="aside-delivery__line">

                  <div className="aside-delivery__fill" >
                    <span >5650  ₽</span></div>
                </div>
              </div>

              <div className="aside-delivery__info">
                <div className="aside-info__item"><span>Время доставки</span><span>~60 мин</span>
                </div>

                <div className="aside-info__item"><span>Итого</span><span id="total-amount">5650 ₽</span>
                </div>
              </div>
              <div className="aside-delivery__button">
                <a href="#checkout" data-text="Оформить заказ"
                   className="button button-checkout"><span>Оформить заказ </span></a>
                <a href="#banner" className="aside-delivery__address button button-checkout">
                  <span>Указать адресс</span>
                </a>
              </div>

              <div className="aside-delivery__general">
                <ul>
                  <li>БЕСПЛАТНАЯ ДОСТАВКА</li>
                  <li>- по Москва-Сити от 1500 руб.</li>
                  <li>- при заказае от 10 000 руб.</li>
                  <li>- от 3 000 руб - стоимость доставки 500 руб</li>
                  <li>- от 5000 рублей бесплатно в радиусе 10 км от Москва-Сити</li>
                </ul>
              </div>
            </aside>
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
