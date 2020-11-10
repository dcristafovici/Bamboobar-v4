import React, {useState, useEffect} from "react"
import axios from "axios";
import {connect, useDispatch} from "react-redux"
import {addToAside} from "../../redux/actions/asideAction"

const CatalogItem = ({categoryId}) => {
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
  return(
    <div className="catalog-item" data-id="571">
      <div className="catalog-item__top">
        <h4>Черная смородина</h4>
        <span><span className="woocommerce-Price-amount amount"><bdi>450<span
          className="woocommerce-Price-currencySymbol">₽</span></bdi></span></span>
      </div>
      <div className="catalog-item__info">
        <p></p>
      </div>
      <div className="catalog-item__photo">
        <img width="300" height="165"
             src="http://delivery.bamboobar.su/wp-content/uploads/2020/10/smorodina--300x165.jpg"
             className="attachment-medium size-medium wp-post-image" alt="" loading="lazy"
             srcSet="http://delivery.bamboobar.su/wp-content/uploads/2020/10/smorodina--300x165.jpg 300w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/smorodina--600x330.jpg 600w, http://delivery.bamboobar.su/wp-content/uploads/2020/10/smorodina-.jpg 750w"
             sizes="(max-width: 300px) 100vw, 300px" />
        <div className="catalog-photo__general">



          <div className="catalog-photo__gramme"><span>50 г</span>
          </div>
        </div>
      </div>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    addToAside: payload => dispatch(addToAside(payload))
  }
}


export default connect(mapDispatchToProps)(CatalogItem)
