import React from "react"

const Home = () =>{
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

              <div className="catalog-point">
                <div className="title">
                  <h2>Завтраки</h2>
                </div>
                <div className="catalog-filters">
                  <span>Сортировка:</span>
                  <ul>
                    <li>
                      <span>Цена</span>
                      <img
                        src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/catalog/down.svg"
                        alt="Down"/>
                    </li>

                  </ul>
                </div>
                <div className="catalog-items">

                  <div className="catalog-item" data-id="686">
                    <div className="catalog-item__top">
                      <h4>Домашний йогурт с семенами чиа, свежими ягодами и кремом пат...</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>850<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="200"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Domashnij-jogurt-s-semenami-chia-300x200.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Domashnij-jogurt-s-semenami-chia-300x200.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Domashnij-jogurt-s-semenami-chia-1024x683.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Domashnij-jogurt-s-semenami-chia-768x512.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Domashnij-jogurt-s-semenami-chia-1536x1024.jpg 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Domashnij-jogurt-s-semenami-chia-2048x1365.jpg 2048w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Domashnij-jogurt-s-semenami-chia-600x400.jpg 600w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">

                          <div className="catalog-photo__gramme"><span>200 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="685">
                    <div className="catalog-item__top">
                      <h4>Творожная запеканка с кусочками персика и сладким соусом</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>750<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="200"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Tvorozhnaya-zapekanka-s-pesrikami-300x200.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Tvorozhnaya-zapekanka-s-pesrikami-300x200.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Tvorozhnaya-zapekanka-s-pesrikami-1024x683.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Tvorozhnaya-zapekanka-s-pesrikami-768x512.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Tvorozhnaya-zapekanka-s-pesrikami-1536x1024.jpg 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Tvorozhnaya-zapekanka-s-pesrikami-2048x1365.jpg 2048w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Tvorozhnaya-zapekanka-s-pesrikami-600x400.jpg 600w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">

                          <div className="catalog-photo__gramme"><span>200 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="684">
                    <div className="catalog-item__top">
                      <h4>Фирменные сырники из домашнего творога с густой сметаной и я...</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>750<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="200"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Syrniki-300x200.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Syrniki-300x200.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Syrniki-1024x683.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Syrniki-768x512.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Syrniki-1536x1024.jpg 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Syrniki-2048x1365.jpg 2048w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Syrniki-600x400.jpg 600w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>750 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="683">
                    <div className="catalog-item__top">
                      <h4>Мюсли Бирхер на овсянных беглютеновых хлопьях, миндальном мо...</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>550<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="225" height="300"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/11/Mjusli-Birher-225x300.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/11/Mjusli-Birher-225x300.jpg 225w, http://delivery.bamboobar.su/wp-content/uploads/2020/11/Mjusli-Birher-600x800.jpg 600w, http://delivery.bamboobar.su/wp-content/uploads/2020/11/Mjusli-Birher.jpg 768w"
                           sizes="(max-width: 225px) 100vw, 225px" />
                        <div className="catalog-photo__general">
                          <div className="catalog-photo__gramme"><span>240 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="680">
                    <div className="catalog-item__top">
                      <h4>Венские вафли с лепестками хрустящего миндаля и сгущенным мо...</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>650<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="200"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Venskie-vafli-so-sgushhenym-molokom-300x200.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Venskie-vafli-so-sgushhenym-molokom-300x200.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Venskie-vafli-so-sgushhenym-molokom-1024x683.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Venskie-vafli-so-sgushhenym-molokom-768x512.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Venskie-vafli-so-sgushhenym-molokom-1536x1024.jpg 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Venskie-vafli-so-sgushhenym-molokom-2048x1365.jpg 2048w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Venskie-vafli-so-sgushhenym-molokom-600x400.jpg 600w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">

                          <div className="catalog-photo__gramme"><span>145 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="679">
                    <div className="catalog-item__top">
                      <h4>Пышные панкейки со сливочно-сметанным соусом, с малиной и го...</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>450<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="200"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Pankejki-so-slivochnym-sousom-300x200.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Pankejki-so-slivochnym-sousom-300x200.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Pankejki-so-slivochnym-sousom-1024x683.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Pankejki-so-slivochnym-sousom-768x512.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Pankejki-so-slivochnym-sousom-1536x1024.jpg 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Pankejki-so-slivochnym-sousom-2048x1365.jpg 2048w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Pankejki-so-slivochnym-sousom-600x400.jpg 600w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>335 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="677">
                    <div className="catalog-item__top">
                      <h4>Французский шоколадный круассан</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>300<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="200"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-s-shokoladnoj-nachinkoj-300x200.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-s-shokoladnoj-nachinkoj-300x200.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-s-shokoladnoj-nachinkoj-1024x683.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-s-shokoladnoj-nachinkoj-768x512.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-s-shokoladnoj-nachinkoj-1536x1024.jpg 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-s-shokoladnoj-nachinkoj-2048x1365.jpg 2048w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-s-shokoladnoj-nachinkoj-600x400.jpg 600w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">
                          <div className="catalog-photo__gramme"><span>100 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="676">
                    <div className="catalog-item__top">
                      <h4>Французский круассан миндальный</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>400<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="200"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-s-mindalnoj-nachinkoj-300x200.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-s-mindalnoj-nachinkoj-300x200.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-s-mindalnoj-nachinkoj-1024x683.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-s-mindalnoj-nachinkoj-768x512.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-s-mindalnoj-nachinkoj-1536x1024.jpg 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-s-mindalnoj-nachinkoj-2048x1365.jpg 2048w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-s-mindalnoj-nachinkoj-600x400.jpg 600w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>120 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="675">
                    <div className="catalog-item__top">
                      <h4>Манная каша со свежими ягодами, лепестками миндаля, бананом ...</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>500<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="200"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Mannaya-kasha-s-yagodami-300x200.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Mannaya-kasha-s-yagodami-300x200.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Mannaya-kasha-s-yagodami-1024x683.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Mannaya-kasha-s-yagodami-768x512.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Mannaya-kasha-s-yagodami-1536x1024.jpg 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Mannaya-kasha-s-yagodami-2048x1365.jpg 2048w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Mannaya-kasha-s-yagodami-600x400.jpg 600w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>250/80 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="674">
                    <div className="catalog-item__top">
                      <h4>Рисовая каша со свежими ягодами, лепестками миндаля, бананом...</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>500<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="200"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Risovaya-kasha-s-yagodami-300x200.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Risovaya-kasha-s-yagodami-300x200.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Risovaya-kasha-s-yagodami-1024x683.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Risovaya-kasha-s-yagodami-768x512.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Risovaya-kasha-s-yagodami-1536x1024.jpg 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Risovaya-kasha-s-yagodami-2048x1365.jpg 2048w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Risovaya-kasha-s-yagodami-600x400.jpg 600w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>250/80 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="673">
                    <div className="catalog-item__top">
                      <h4>Овсяная (без глютена) каша со свежими ягодами, лепестками ...</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>550<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="200"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Ovsyanaya-kasha-so-svezhimi-yagodami-300x200.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Ovsyanaya-kasha-so-svezhimi-yagodami-300x200.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Ovsyanaya-kasha-so-svezhimi-yagodami-1024x683.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Ovsyanaya-kasha-so-svezhimi-yagodami-768x512.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Ovsyanaya-kasha-so-svezhimi-yagodami-1536x1024.jpg 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Ovsyanaya-kasha-so-svezhimi-yagodami-2048x1365.jpg 2048w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Ovsyanaya-kasha-so-svezhimi-yagodami-600x400.jpg 600w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>250/80 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="672">
                    <div className="catalog-item__top">
                      <h4>Овсяная каша со свежими ягодами, лепестками миндаля, бананом...</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>500<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="200"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Ovsyanaya-kasha-so-svezhimi-yagodami-300x200.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Ovsyanaya-kasha-so-svezhimi-yagodami-300x200.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Ovsyanaya-kasha-so-svezhimi-yagodami-1024x683.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Ovsyanaya-kasha-so-svezhimi-yagodami-768x512.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Ovsyanaya-kasha-so-svezhimi-yagodami-1536x1024.jpg 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Ovsyanaya-kasha-so-svezhimi-yagodami-2048x1365.jpg 2048w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Ovsyanaya-kasha-so-svezhimi-yagodami-600x400.jpg 600w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>250/80 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="671">
                    <div className="catalog-item__top">
                      <h4>Нежный омлет с листьями шпината, молодыми соевыми бобами и х...</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>450<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="200"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Omlet-so-shpinatom-300x200.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Omlet-so-shpinatom-300x200.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Omlet-so-shpinatom-1024x683.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Omlet-so-shpinatom-768x512.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Omlet-so-shpinatom-1536x1024.jpg 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Omlet-so-shpinatom-2048x1365.jpg 2048w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Omlet-so-shpinatom-600x400.jpg 600w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>230 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="670">
                    <div className="catalog-item__top">
                      <h4>Нежный омлет со сладкими томатами и хрустящим багетом</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>450<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="200"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Omlet-s-tomatami-300x200.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Omlet-s-tomatami-300x200.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Omlet-s-tomatami-1024x683.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Omlet-s-tomatami-768x512.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Omlet-s-tomatami-1536x1024.jpg 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Omlet-s-tomatami-2048x1365.jpg 2048w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Omlet-s-tomatami-600x400.jpg 600w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>230 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="669">
                    <div className="catalog-item__top">
                      <h4>Глазунья из двух яиц с беконом, спелыми томатами и хрустящим...</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>450<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="153"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Glazunya-iz-dvuh-yaic-s-bekonom-300x153.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Glazunya-iz-dvuh-yaic-s-bekonom-300x153.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Glazunya-iz-dvuh-yaic-s-bekonom-1024x523.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Glazunya-iz-dvuh-yaic-s-bekonom-768x392.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Glazunya-iz-dvuh-yaic-s-bekonom-600x307.jpg 600w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Glazunya-iz-dvuh-yaic-s-bekonom.jpg 1280w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>150 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="666">
                    <div className="catalog-item__top">
                      <h4>Глазунья из двух яиц со спелыми томатами черри, листьями ром...</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>350<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="154"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/11/2020-11-06_17-58-43-300x154.png"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/11/2020-11-06_17-58-43-300x154.png 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/11/2020-11-06_17-58-43-1024x526.png 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/11/2020-11-06_17-58-43-768x394.png 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/11/2020-11-06_17-58-43-1536x788.png 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/11/2020-11-06_17-58-43-600x308.png 600w, http://delivery.bamboobar.su/wp-content/uploads/2020/11/2020-11-06_17-58-43-e1604675461381.png 1280w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>150 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="665">
                    <div className="catalog-item__top">
                      <h4>Яйцо пашот с зелёной спаржей и густым пикатным соусом</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>750<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="200"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Yajco-pasho-s-zelenoj-sparzhej-300x200.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Yajco-pasho-s-zelenoj-sparzhej-300x200.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Yajco-pasho-s-zelenoj-sparzhej-1024x683.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Yajco-pasho-s-zelenoj-sparzhej-768x512.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Yajco-pasho-s-zelenoj-sparzhej-1536x1024.jpg 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Yajco-pasho-s-zelenoj-sparzhej-2048x1365.jpg 2048w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Yajco-pasho-s-zelenoj-sparzhej-600x400.jpg 600w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>150 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="664">
                    <div className="catalog-item__top">
                      <h4>Сэндвич с фарерским лососем, зернистой красной икрой, сливоч...</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>750<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="155"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/11/2020-11-06_18-03-29-300x155.png"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/11/2020-11-06_18-03-29-300x155.png 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/11/2020-11-06_18-03-29-1024x529.png 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/11/2020-11-06_18-03-29-768x397.png 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/11/2020-11-06_18-03-29-600x310.png 600w, http://delivery.bamboobar.su/wp-content/uploads/2020/11/2020-11-06_18-03-29-e1604675574695.png 1280w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>195 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="660">
                    <div className="catalog-item__top">
                      <h4>Сэндвич с куриным филе гриль, овощами и сыром чеддер</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>500<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="152"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/11/2020-11-06_18-02-49-300x152.png"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/11/2020-11-06_18-02-49-300x152.png 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/11/2020-11-06_18-02-49-1024x520.png 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/11/2020-11-06_18-02-49-768x390.png 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/11/2020-11-06_18-02-49-1536x780.png 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/11/2020-11-06_18-02-49-600x305.png 600w, http://delivery.bamboobar.su/wp-content/uploads/2020/11/2020-11-06_18-02-49-e1604675794194.png 1280w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>300 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="659">
                    <div className="catalog-item__top">
                      <h4>Круассан со слабосленым лососем, хрустящей рукколой, перепел...</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>850<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="200"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-so-slabosolenym-lososem-300x200.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-so-slabosolenym-lososem-300x200.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-so-slabosolenym-lososem-1024x683.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-so-slabosolenym-lososem-768x512.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-so-slabosolenym-lososem-1536x1024.jpg 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-so-slabosolenym-lososem-2048x1365.jpg 2048w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Kruassan-so-slabosolenym-lososem-600x400.jpg 600w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>150 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="658">
                    <div className="catalog-item__top">
                      <h4>Блины со слабосоленым лососем, буратто и маракуйей</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>1650<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="155"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Bliny-so-slabosolenym-lososem-syrom-buratta-300x155.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Bliny-so-slabosolenym-lososem-syrom-buratta-300x155.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Bliny-so-slabosolenym-lososem-syrom-buratta-1024x530.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Bliny-so-slabosolenym-lososem-syrom-buratta-768x397.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Bliny-so-slabosolenym-lososem-syrom-buratta-600x310.jpg 600w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Bliny-so-slabosolenym-lososem-syrom-buratta.jpg 1280w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>250/20 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="657">
                    <div className="catalog-item__top">
                      <h4>Традиционные блины со сметаной</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>300<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="200"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Domashnie-bliny-so-smetanoj-300x200.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Domashnie-bliny-so-smetanoj-300x200.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Domashnie-bliny-so-smetanoj-1024x683.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Domashnie-bliny-so-smetanoj-768x512.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Domashnie-bliny-so-smetanoj-1536x1024.jpg 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Domashnie-bliny-so-smetanoj-2048x1365.jpg 2048w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Domashnie-bliny-so-smetanoj-600x400.jpg 600w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>140/50 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="catalog-point">
                <div className="title">
                  <h2>Конфеты ручной работы</h2>
                </div>
                <div className="catalog-filters">
                  <span>Сортировка:</span>
                  <ul>
                    <li>
                      <span>Цена</span>
                      <img
                        src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/catalog/down.svg"
                        alt="Down" />
                    </li>

                  </ul>
                </div>
                <div className="catalog-items">

                  <div className="catalog-item" data-id="630">
                    <div className="catalog-item__top">
                      <h4>Шоколадное печенье «Салями» в подарочной упаковке</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>750<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="169"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/20201106_165631-300x169.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/20201106_165631-300x169.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/20201106_165631-1024x577.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/20201106_165631-768x432.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/20201106_165631-1536x865.jpg 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/20201106_165631-2048x1153.jpg 2048w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/20201106_165631-600x338.jpg 600w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>300 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="560">
                    <div className="catalog-item__top">
                      <h4>Подарочный набор конфет ручной работы BAMBOO BAR</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>750<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="154"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Podarochnyj-nabor-konfet-300x154.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/Podarochnyj-nabor-konfet-300x154.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Podarochnyj-nabor-konfet-1024x526.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Podarochnyj-nabor-konfet-768x394.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Podarochnyj-nabor-konfet-600x308.jpg 600w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/Podarochnyj-nabor-konfet.jpg 1280w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>156 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="catalog-point">
                <div className="title">
                  <h2>Мороженое</h2>
                </div>
                <div className="catalog-filters">
                  <span>Сортировка:</span>
                  <ul>
                    <li>
                      <span>Цена</span>
                      <img
                        src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/catalog/down.svg"
                        alt="Down" />
                    </li>

                  </ul>
                </div>
                <div className="catalog-items">

                  <div className="catalog-item" data-id="568">
                    <div className="catalog-item__top">
                      <h4>Клубника</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>350<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="168"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/klubnichnoe-morozhenoe--300x168.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/klubnichnoe-morozhenoe--300x168.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/klubnichnoe-morozhenoe--1024x573.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/klubnichnoe-morozhenoe--768x430.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/klubnichnoe-morozhenoe--1536x860.jpg 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/klubnichnoe-morozhenoe--2048x1146.jpg 2048w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/klubnichnoe-morozhenoe--600x336.jpg 600w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>50 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="567">
                    <div className="catalog-item__top">
                      <h4>Шоколад</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>350<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="158"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/shokoladnoe-morozhenoe-300x158.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/shokoladnoe-morozhenoe-300x158.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/shokoladnoe-morozhenoe-1024x538.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/shokoladnoe-morozhenoe-768x404.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/shokoladnoe-morozhenoe-1536x807.jpg 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/shokoladnoe-morozhenoe-2048x1076.jpg 2048w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/shokoladnoe-morozhenoe-600x315.jpg 600w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>50 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="566">
                    <div className="catalog-item__top">
                      <h4>Карамель</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>350<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="168"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/karamelnoe-morozhenoe-300x168.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/karamelnoe-morozhenoe-300x168.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/karamelnoe-morozhenoe-1024x574.jpg 1024w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/karamelnoe-morozhenoe-768x431.jpg 768w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/karamelnoe-morozhenoe-1536x861.jpg 1536w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/karamelnoe-morozhenoe-2048x1148.jpg 2048w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/karamelnoe-morozhenoe-600x336.jpg 600w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>50 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="564">
                    <div className="catalog-item__top">
                      <h4>Грецкий орех с кленовым сиропом</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>350<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="162"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/greckij-oreh-300x162.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/greckij-oreh-300x162.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/greckij-oreh.jpg 500w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>350 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="563">
                    <div className="catalog-item__top">
                      <h4>Зеленый чай</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>350<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="154"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/zelenyj-chaj-300x154.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/zelenyj-chaj-300x154.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/zelenyj-chaj.jpg 500w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>50 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="562">
                    <div className="catalog-item__top">
                      <h4>Пломбир</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>350<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="164"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/plombir--300x164.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/plombir--300x164.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/plombir-.jpg 500w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>50 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="catalog-point">
                <div className="title">
                  <h2>Сорбеты</h2>
                </div>
                <div className="catalog-filters">
                  <span>Сортировка:</span>
                  <ul>
                    <li>
                      <span>Цена</span>
                      <img
                        src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/catalog/down.svg"
                        alt="Down" />
                    </li>

                  </ul>
                </div>
                <div className="catalog-items">

                  <div className="catalog-item" data-id="571">
                    <div className="catalog-item__top">
                      <h4>Черная смородина</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>450<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="165"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/smorodina--300x165.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/smorodina--300x165.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/smorodina--600x330.jpg 600w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/smorodina-.jpg 750w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>50 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="570">
                    <div className="catalog-item__top">
                      <h4>Манго-маракуйя</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>450<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="155"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/mango-300x155.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/mango-300x155.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/mango-600x310.jpg 600w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/mango.jpg 750w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>50 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="catalog-item" data-id="569">
                    <div className="catalog-item__top">
                      <h4>Лимон-лайм</h4>
                      <span><span className="woocommerce-Price-amount amount"><bdi>450<span
                        className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
                    </div>
                    <div className="catalog-item__info">
                      <p></p>
                    </div>
                    <div className="catalog-item__photo">
                      <img width="300" height="163"
                           src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/limon-300x163.jpg"
                           className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
                           srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/limon-300x163.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/limon-600x326.jpg 600w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/limon.jpg 750w"
                           sizes="(max-width: 300px) 100vw, 300px" />
                        <div className="catalog-photo__general">



                          <div className="catalog-photo__gramme"><span>50 г</span>
                          </div>
                        </div>
                    </div>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>


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
