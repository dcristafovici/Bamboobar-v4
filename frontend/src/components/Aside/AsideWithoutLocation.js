import React from "react"


const AsideWithoutLocation = () => {

  const handleBtnAddressClick = () => {
    document.getElementById("banner").scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="aside-delivery__button">
        <div href="#banner" onClick={handleBtnAddressClick} className="button button-checkout">
          <span>Указать адресс</span>
        </div>
    </div>
  )
}



export default AsideWithoutLocation
