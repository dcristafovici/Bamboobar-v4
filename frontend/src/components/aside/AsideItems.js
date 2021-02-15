import React from "react"
import AsideItem from "./AsideItem";

const AsideItems = ({cart, isSale}) => {
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
    </div>
  )
}

export default AsideItems
