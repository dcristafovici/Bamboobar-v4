import React, {useEffect} from 'react'
import Aside from "../Aside/Aside";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../../redux/actions/categoriesAction";
import {fetchProducts} from "../../redux/actions/productsAction";

import CatalogPoint from "./CatalogPoint";

const Catalog = () => {
  const categoriesReducer = useSelector(state => state.categoriesReducer)
  const productsReducer = useSelector(state => state.productsReducer)

  const {categories, loading, error} = categoriesReducer
  const { products } = productsReducer
  const dispatch = useDispatch()
  const currentTime = new Date().getHours()
  useEffect(() => {
    async function fetchData(){
      await dispatch(fetchProducts())
      dispatch(fetchCategories())
    }
    fetchData()
  }, [dispatch])

  return (
    <section className="catalog">
      <div className="content">
        <div className="catalog-wrapper">
          <div className="catalog-main">
            {loading ?
              (<h1>loading</h1>)
              : error ? (<h2>{error}</h2>)
                : (
                  categories
                    .map((category, index) => {
                      const filteredProducts = products.filter(product => product.category === category._id)
                      if(category._id === '6035f67346ae28731ddd71c3' && currentTime >= 13)
                        return false
                      return (
                        <CatalogPoint key={index} index={index} products={filteredProducts} category={category}/>
                      )
                    })
                )
            }
          </div>
          <Aside/>
        </div>
      </div>
    </section>
  )
}

export default Catalog
