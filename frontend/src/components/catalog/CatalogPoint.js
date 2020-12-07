import React, {useState, useEffect, Component} from "react"
import {connect, useDispatch} from "react-redux"
import CatalogItem from "./CatalogItem";
import {fetchCategories} from "../../redux/actions/categoriesAction";

const CatalogPoint = ({categories, loading}) => {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchCategories())
  }, [dispatch])


  const renderCategories = () => {
    return categories.map((category, index) => {
      return(
        <div key={index}  className="catalog-point">
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
            {/*<CatalogItem  categoryId={category._id}/>*/}
          </div>
        </div>
      )
    })
  }
  {
    loading && categories.length !== 0
    ? "<h1>Loading</h1>"
    :
      {renderCategories}
  }
  return (
    <div>
      <h1>hello</h1>
    </div>
  )


}


const mapStateToProps = (state) =>{
  return{
    categories: state.categoriesReducer.categories[0],
    loading: state.categoriesReducer.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchCategories: () => dispatch(fetchCategories())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CatalogPoint)
