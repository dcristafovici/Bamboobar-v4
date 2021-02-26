import React from "react"
import NotDelivery from "../modal/NotDelivery";
import MobileShow from "../MobileShow/MobileShow";
import NotWorking from "../modal/NotWorking";
const Footer = () => {
  return(
    <React.Fragment>
    <NotDelivery/>
    <NotWorking />
    <section className="footer">
      <div className="content">
        <div className="footer-wrapper">
          <div className="footer-left">
            <div className="footer-logo">
              <a href="/" className="logo">
                <img src="/images/banner/logo.svg"
                     alt="Logo" />
              </a>
            </div>
            <div className="footer-contacts">
              <ul>
                <li>
                  <a href="tel:7 (985) 766-49-62" target="_blank">
                    <img
                      src="/images/footer/f1.svg"
                      alt="Footer" /><span>7 (985) 766-49-62</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:" target="_blank">
                    <img
                      src="/images/footer/f2.svg"
                      alt="Footer" /><span>Написать нам</span>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img
                      src="/images/footer/f3.svg"
                      alt="Footer" /><span>Москва, Пресненская наб., 8, стр. 1</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-socials">
            <ul>
              <li>
                <a href="https://www.instagram.com/bamboobarmsk/" rel='nofollow' target="_blank">
                  <img src="/images/footer/f4.svg"
                       alt="socials" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/bamboobarmsk/" rel='nofollow' target="_blank">
                  <img src="/images/footer/f5.svg"
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

            </nav>
          </div>
        </div>
        <div className="coph">© 2010–2021, официальный сайт ДОСТАВКИ ИЗ РЕСТОРАНА BAMBOOBAR</div>
      </div>
    </section>

      <MobileShow />


    </React.Fragment>
  )
}

export default Footer
