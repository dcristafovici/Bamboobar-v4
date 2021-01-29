import React from "react"
import Register from "../modal/Register";
import {connect} from "react-redux"
import {clearUserData} from "../../redux/actions/authAction";

const Header = ({user, clearData}) => {
  return(
      <header className="header">
        <div className="content">
          <div className="header-wrapper">
            <div className="header-logo">
              <a href="/" className="logo">
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
            {(user.user) ? (
              <div className="header-account__top" onClick={() => clearData()}>
                <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/header/bear.png" />
                <span>Выйти</span>
              </div>
            ) : (
            <div className="header-account">
             <Register />
            </div>
            )}
          </div>
        </div>
      </header>
  )
}

const mapStateToProps = (state) => {
  return{
    user: state.authReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearData: () => dispatch(clearUserData())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)
