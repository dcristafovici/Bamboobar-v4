import React from "react"
import {useSelector, connect} from "react-redux";
import {addToCart, openNotDelivery} from "../../redux/actions/asideAction";

const CatalogItem = ({products, addToCart, addressReducer, openNotDelivery}) => {


  return (
    products.map((product, index) => {
      return (
        <div
          key={index}
          className="catalog-item"
          onClick={() => (addressReducer.location || addressReducer.pickup) ? addToCart(product) : openNotDelivery(true)}
        >
          <div className="catalog-item__top">
            <h4>{product.name}</h4>
            <span><span className="woocommerce-Price-amount amount">
              <bdi>{product.price}
                <span className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
          </div>
          <div className="catalog-item__photo">
            <img src={"http://localhost:5000/" + product.productImage} alt={product.name}/>
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

const mapStateToProps = state => {
  return {
    addressReducer: state.addressReducer,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    openNotDelivery: (status) => dispatch(openNotDelivery(status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogItem)
