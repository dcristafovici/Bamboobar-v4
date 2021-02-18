import React, {useEffect} from 'react'
import AsideItem from "./AsideItem";
import {connect} from 'react-redux'
import {setPercent, setTotal} from "../../redux/actions/asideAction";
import AsideTaxi from "./AsideTaxi";

const AsideItems = ({cart, addressReducer, asideReducer, setTotal, setPercent}) => {

  useEffect(() => {
    let totalPrice = 0;
    cart.forEach(product => {
      totalPrice += addressReducer.sale ? product.priceGroupWithSale : product.priceGroup;
    })
    setTotal(totalPrice)
  }, [cart])

  useEffect(() => {
    let percent = asideReducer.total / addressReducer.minCount * 100
    setPercent(percent)
  }, [asideReducer.total])


  return(
    <div className="aside-items">
      {cart.map((item, index) => {
        return (
          <AsideItem
            key={index}
            item={item}
          />
        )
      })}
      {addressReducer.useTaxi ? (
        <AsideTaxi />
      ): ""}
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    cart: state.asideReducer.cart,
    addressReducer: state.addressReducer,
    asideReducer: state.asideReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setTotal: (total) => dispatch(setTotal(total)),
    setPercent: (percent) => dispatch(setPercent(percent))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AsideItems)
