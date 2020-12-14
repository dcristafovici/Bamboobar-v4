import React, {Component}  from "react"
import {connect} from "react-redux"
import axios from "axios";
import {addToCart} from "../../redux/actions/asideAction";


class CatalogItem extends Component {

  componentDidMount() {
    this.renderProducts()
  }

  addToCart = (product) => {
    addToCart(product)
  }
  renderProducts =  async() => {
    try {
      const response = await axios.get('/api/product/findById/' + this.props.categoryId)
      const products = response.data.products
      this.setState({
        Products:  products.map((product, index) => {
          let productImage = product.productImage
          productImage = "http://localhost:5000/" + productImage
          return(
            <div className="catalog-item" onClick={(product) => this.props.addToCart(product)} key={index} data-id={product._id}>
              <div className="catalog-item__top">
                <h4>{product.name}</h4>
                <span><span className="woocommerce-Price-amount amount"><bdi>{product.price}<span
                  className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
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
      })
    } catch (err) {
      console.log(err)
    }
  }
  render() {

    return(
      <React.Fragment>
        {this.state.Products}
      </React.Fragment>
    )
  }

}

const mapStateToProps = (state) => {
  return{
    products: state.asideReducer.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addToCart: (product) => dispatch(addToCart(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogItem)
