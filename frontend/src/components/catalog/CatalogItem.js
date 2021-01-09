import React, {useEffect, useState} from "react"
import {connect} from "react-redux"
import axios from "axios";
import {addToCart} from "../../redux/actions/asideAction";


const CatalogItem = ({categoryId, addToCart, address}) => {
  const [data, updateData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/product/findById/' + categoryId)
      const products = response.data.products
      updateData(products)
    }
    getData()
  }, [])


  return(
    <React.Fragment>
    {data.map((product, index) => {
      let productImage = product.productImage
      productImage = "http://localhost:5000/" + productImage
      return(
        <div
              className="catalog-item"
             onClick={() => {
              if(address.delivery){
                addToCart(product)
              } else{
                console.log('Not delivery')
              }
              }
             }
             key={index}
             data-id={product._id}>
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
    })}
    </React.Fragment>
  )

}


const mapStateToProps = (state) => {
  return{
    products: state.asideReducer.products,
    address: state.addressReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addToCart: (product) => dispatch(addToCart(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogItem)
