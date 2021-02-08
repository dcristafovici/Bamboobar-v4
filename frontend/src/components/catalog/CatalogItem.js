import React from "react"
import {useSelector, connect} from "react-redux";
import {addToCart} from "../../redux/actions/asideAction";
import {togglePopup} from '../../redux/actions/addressAction'

const CatalogItem = ({products, addToCart, togglePopup}) => {

  const addressReducer = useSelector(state => state.addressReducer)
  const {delivery} = addressReducer
  return (
    products.map((product, index) => {
      return (
        <div key={index} className="catalog-item"
             onClick={() => (delivery) ? addToCart(product) : togglePopup()}>
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
  return state
}

const mapDispatchToProps = dispatch => {
  return{
    addToCart: (product) => dispatch(addToCart(product)),
    togglePopup: () => dispatch(togglePopup())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogItem)
