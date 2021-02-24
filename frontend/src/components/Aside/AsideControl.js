import React from 'react'
import {connect} from 'react-redux'
import {emptyCart} from "../../redux/actions/asideAction";

const AsideControl = ({emptyCart}) => {

  const closeAsideHandle = () => {
    const aside = document.querySelector('aside.aside')
    const body = document.querySelector('body')
    aside.classList.remove('active')
    body.classList.remove('stoped')
  }

  return(
    <div className="aside-control">
      <div className="aside-title">
        <div className="aside-back" onClick={closeAsideHandle}>
          <img src="/images/arrow.svg" alt=""/>
        </div>
        <span>Мой заказ</span>
      </div>
      <div className="aside-close" onClick={() => emptyCart()}>
        <img src="/images/close.svg"
             alt="Close"/>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return{

  }
}

const mapDispatchToProps = dispatch => {
  return{
    emptyCart: () => dispatch(emptyCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsideControl)
