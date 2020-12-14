import React,{Component} from 'react'
import {connect} from 'react-redux'
import Aside from "../aside/Aside";
import {fetchCategories} from "../../redux/actions/categoriesAction";
import CatalogItem from "./CatalogItem";

class Catalog extends Component {

  renderCategories(){
    const categories = this.props.categories
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
              <CatalogItem   categoryId={category._id}/>
            </div>
          </div>
        )
    })
  }

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    return(
      <section className="catalog">
        <div className="content">
          <div className="catalog-wrapper">
            <div className="catalog-main">
              {
                this.props.loading  && this.props.categories !== 0
                ? "<h1> loading </h1>"
                : <ul>
                  {this.renderCategories()}
                  </ul>
              }
            </div>
            <Aside/>
          </div>
        </div>
      </section>
    )
  }
}
const mapStateToProps = (state) =>{
  return{
    categories: state.categoriesReducer.categories,
    loading: state.categoriesReducer.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchCategories: () => dispatch(fetchCategories()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Catalog)
