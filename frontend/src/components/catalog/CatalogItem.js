import React, {useState, useEffect} from "react"
import axios from "axios";
import {connect, useDispatch} from "react-redux"
import {addToAside} from "../../redux/actions/asideAction"

const CatalogItem = ({categoryId, asideItems, totalPrice}) => {
  const [products, setProducts] = useState([])

  let loadingCategories = false
  useEffect(()=>{
    axios
      .get('/api/product/findById/'+categoryId)
      .then(result => setProducts(result.data.products))
    loadingCategories = true
  }, [])
  const dispatch = useDispatch()
  const handleClick = (id, name, quantity, price) => {
    dispatch(addToAside({id, name, quantity, price }));

    const asideItemsJSON = JSON.stringify(asideItems)
    const totalPriceJSON = JSON.stringify(totalPrice)
    localStorage.setItem('asideItems', asideItemsJSON)
    localStorage.setItem('totalPrice', totalPriceJSON)

  }

  return products.map((product, key) => {
    let productImage = product.productImage
    productImage = "http://localhost:5000/" + productImage

    return(
      <div className="catalog-item" key={key} data-id={product._id} onClick={() => handleClick(product._id, product.name, 1, product.price)}>
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

const mapDispatchToProps = (dispatch) => {
  return{
    addToAside: payload => dispatch(addToAside(payload))
  }
}

const mapStateToProps = (state) => {
  return{
    asideItems: state.asideReducer.asideItems,
    totalPrice: state.asideReducer.total
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(CatalogItem)
