import React,{Component} from "react"
import {connect} from "react-redux";
import {fetchProductsById} from "../../redux/actions/productsAction";

class CatalogItem extends Component{
  componentDidMount(){
    this.props.fetchProductsById(this.props.categoryId)
  }
  renderProducts(){
    const products = this.props.products
    return products.map((product, key) => {
      let productImage = product.productImage
      productImage = "http://localhost:5000/" + productImage

      return(
        <div className="catalog-item" key={key} data-id={product._id}  >
          <div className="catalog-item__top">
            <h4>{product.name}</h4>
            <span><span className="woocommerce-Price-amount amount"><bdi>{product.price}<span
              className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
          </div>
          <div className="catalog-item__info">
            <p></p>
          </div>
          <div className="catalog-item__photo">
            <img src={productImage} />
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
  }



  render() {
    return(
      <React.Fragment>
        {
          this.props.loading  && this.props.products !== 0
            ? "<h1> loading </h1>"
            : <React.Fragment>
              {this.renderProducts()}
            </React.Fragment>
        }
      </React.Fragment>
    )
  }
}


const mapStateToProps = (state) =>{
  return{
    products: state.productsReducer.products,
    loading: state.productsReducer.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchProductsById: (id) => dispatch(fetchProductsById(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CatalogItem)
