import React, {useEffect} from "react"
import axios from "axios";
import {connect} from "react-redux"
import {setTaxiInfo} from "../../redux/actions/addressAction";

const AsideTaxi = ({address, setTaxiInfo}) => {

  useEffect(() => {
    if(address.address){
      const findTaxiPrice = async () => {
        try {
          const response = await axios.post('/api/find/route', {
            bamboo: address.bambooCoords,
            coords: address.addressCoords
          })
          const priceTaxi = parseFloat(response.data.service_levels[0].description_parts.value)
          setTaxiInfo(response.data.distance, priceTaxi)
        } catch (err) {
          console.log(err)
        }
      }
      findTaxiPrice()
    }
  }, [address.address])

  if (address.taxiDistance) {
    return (
      <div className="aside-item aside-item__taxi">
        <div className="aside-item__name"><span>Доставка - {address.taxiDistance}</span></div>
        <div className="aside-item__right">
          <span className='amount'>{address.taxiPrice} ₽ </span>
          <span>Для бесплатной доставки сумма заказа должна быть больше {address.deliveryNotPay}</span>
        </div>
      </div>
    )
  } else return false
}

const mapStateToProps = (state) => {
  return {
    address: state.addressReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTaxiInfo: (taxiDistance, taxiPrice) => dispatch(setTaxiInfo(taxiDistance, taxiPrice))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsideTaxi)
