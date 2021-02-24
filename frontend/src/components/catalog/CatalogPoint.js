import React from "react"
import CatalogItem from "./CatalogItem";

const CatalogPoint = ({category, products, index}) => {
  return(
    <div className="catalog-point" data-category={index} >
      <div className="title">
        <h2>{category.name}</h2>
      </div>
      <div className="catalog-items">
        <CatalogItem  products={products}  />
      </div>
    </div>
  )
}

export default CatalogPoint
