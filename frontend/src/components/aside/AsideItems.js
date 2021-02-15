import React from "react"
import AsideItem from "./AsideItem";
import AsideTaxi from "./AsideTaxi";

const AsideItems = ({cart, isSale, address}) => {
  return(
    <div className="aside-items">
      {cart.map((item, index) => {
        return (
          <AsideItem
            key={index}
            item={item}
            isSale={isSale}
          />
        )
      })}
      {address.deliveryTaxi ? (
        <AsideTaxi />
      ): ""}
    </div>
  )
}

export default AsideItems
