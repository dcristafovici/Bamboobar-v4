import React, {useEffect} from 'react'
import Aside from "../aside/Aside";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../../redux/actions/categoriesAction";
import CatalogPoint from "./CatalogPoint";

const Catalog = () => {
  const categoriesReducer = useSelector(state => state.categoriesReducer)
  const {categories, loading, error} = categoriesReducer

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
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
                  categories.map((category, index) => {
                    return (
                      <CatalogPoint key={index} category={category}/>
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
