import React, {useEffect} from "react"
import axios from "axios";
import {connect} from 'react-redux'
import {setTaxiInfo} from "../../redux/actions/AddressAction";

const AsideTaxi = ({addressReducer, setTaxiInfo}) => {
 useEffect(() => {
   if(addressReducer.location){
    const findTaxiPrice = async() => {
      try{
        const response = await axios.post('api/find/route', {
          bamboo: addressReducer.bambooCoords,
          coords: addressReducer.locationCoords
        })
        const priceTaxi = parseFloat(response.data.service_levels[0].description_parts.value)
        setTaxiInfo(priceTaxi, response.data.distance, )

      } catch (err){
        console.log(err.message)
      }
    }

    findTaxiPrice()
   }

 }, [addressReducer.location])


  return(
   <div className="aside-item aside-item__taxi">
     <div className="aside-item__name"><span>Доставка - {addressReducer.taxiDistance}</span></div>
     <div className="aside-item__right">
       <span className='amount'>{addressReducer.taxiPrice} ₽ </span>
       <span>Для бесплатной доставки сумма заказа должна быть больше {addressReducer.withoutPayDelivery}</span>
     </div>
   </div>
 )
}

const mapStateToProps = (state) => {
  return{
    addressReducer: state.addressReducer
  }
}

const mapDispatchToProps = dispatch => {
  return{
    setTaxiInfo: (taxiPrice, taxiDistance) => dispatch(setTaxiInfo(taxiPrice, taxiDistance))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsideTaxi)
