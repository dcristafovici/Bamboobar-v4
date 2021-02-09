import React, {useState, useEffect} from 'react'
import Popup from "reactjs-popup";
import {connect} from 'react-redux'
import {togglePopup} from "../../redux/actions/addressAction";


const NotDelivery = ({popup, togglePopup}) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(popup)
  }, [popup])
  return(
    <Popup open={open}  modal onClose={()=> togglePopup()}>
      <div className="notdelivery-wrapper bamboo-error">
        <h2>Укажите ваш адрес</h2>
        <p>В данной области доставка не доступна</p>
        <p></p>
        <div className="button">
          <span>Указать адрес</span>
        </div>
        <div className="button button-pickup">
          <span>Самовывоз</span>
        </div>
      </div>
    </Popup>
  )
}


const mapStateToProps = (state) => {
  return{
    popup: state.addressReducer.popup
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    togglePopup: () => dispatch(togglePopup())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotDelivery)
