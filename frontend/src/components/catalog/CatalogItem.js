import React from "react"


const CatalogItem = ({products}) => {

  return (
    products.map((product, index) => {
      return (
        <div key={index} className="catalog-item">
          <div className="catalog-item__top">
            <h4>{product.name}</h4>
            <span><span className="woocommerce-Price-amount amount">
              <bdi>{product.price}
                <span className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
          </div>
          <div className="catalog-item__photo">
            <img src={"http://localhost:5000/" + product.productImage} />
            <div className="catalog-photo__general">
              <div className="catalog-photo__gramme"><span>{product.weight} г</span>
              </div>
            </div>
          </div>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>

        </div>
      )
    })
  )


}


export default CatalogItem
