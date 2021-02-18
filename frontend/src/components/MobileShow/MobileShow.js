import React from 'react'
import {connect} from 'react-redux'
const MobileShow = ({asideReducer, addressReducer}) => {

  const openAsideToggle = () => {
    const aside = document.querySelector('aside.aside')
    const body = document.querySelector('body')
    aside.classList.add('active')
    body.classList.add('stoped')
  }
  return(
    <div className="mobile-show" onClick={openAsideToggle}>
      <div className="mobile-show__wrapper">
        <div className="mobile-show__delivery">~{addressReducer.time}</div>
        <div className="mobile-show__name">Корзина</div>
        <div className="mobile-show__price">{asideReducer.total} ₽</div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    asideReducer: state.asideReducer,
    addressReducer: state.addressReducer
  }
}
export default connect(mapStateToProps)(MobileShow)
