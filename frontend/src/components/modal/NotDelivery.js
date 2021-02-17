import React, {useState, useEffect} from 'react'
import Popup from "reactjs-popup";
import {connect} from 'react-redux'
import {openNotDelivery} from "../../redux/actions/asideAction";
import {setPickup} from "../../redux/actions/AddressAction";


const NotDelivery = ({notDelivery, openNotDelivery, setPickup}) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(notDelivery)
  }, [notDelivery])

  const writeAddressClick = () => {
    openNotDelivery(false)
    document.getElementById("banner").scrollIntoView({ behavior: "smooth" });
  }
  const pickupClickHandle = () => {
    openNotDelivery(false)
    setPickup()
  }



  return(
    <Popup
      open={open}
      modal
      onClose={() => openNotDelivery(false)}
    >
      <div className="notdelivery-wrapper bamboo-error"  >
        <h2>Укажите ваш адрес</h2>
        <p>В данной области доставка не доступна</p>
        <p></p>
        <div className="button" onClick={writeAddressClick}>
          <span>Указать адрес</span>
        </div>
        <div className="button button-pickup" onClick={pickupClickHandle}>
          <span>Самовывоз</span>
        </div>
      </div>
    </Popup>
  )
}


const mapStateToProps = (state) => {
  return{
    notDelivery: state.asideReducer.notDelivery
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    openNotDelivery: (status) => dispatch(openNotDelivery(status)),
    setPickup: () => dispatch(setPickup()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotDelivery)
