import React from "react"
import NotDelivery from "../modal/NotDelivery";
import MobileShow from "../MobileShow/MobileShow";
const Footer = () => {
  return(
    <React.Fragment>
    <NotDelivery/>
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
        <div className="coph">© 2010–2021, официальный сайт ДОСТАВКИ ИЗ РЕСТОРАНА BAMBOOBAR</div>
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
      <MobileShow />


    </React.Fragment>
  )
}

export default Footer
