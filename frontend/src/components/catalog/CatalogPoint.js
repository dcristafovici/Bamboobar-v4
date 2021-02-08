import React from "react"
import CatalogItem from "./CatalogItem";

const CatalogPoint = ({category}) => {
  return(
    <div className="catalog-point">
      <div className="title">
        <h2>{category.name}</h2>
      </div>
      <div className="catalog-filters">
        <span>Сортировка:</span>
        <ul>
          <li>
            <span>Цена</span>
            <img
              src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/catalog/down.svg"
              alt="Down" />
          </li>
        </ul>
      </div>
      <div className="catalog-items">
        <CatalogItem   categoryId={category._id}/>
      </div>
    </div>
  )
}

export default CatalogPoint
