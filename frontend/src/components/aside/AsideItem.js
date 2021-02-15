import React from "react"
import {connect} from "react-redux"
import {addQuantity, removeFromCart, subQuantity} from "../../redux/actions/asideAction";

const AsideItem = ({item, addQuantity, subQuantity, removeFromCart, isSale}) => {
  return (
    <div className="aside-item">
      <div className="aside-item__name"><span>{item.name}</span></div>
      <div className="aside-item__change" key={item.quantity}>
        <div className="aside-plus"
             onClick={() => addQuantity(item.product._id, item.quantity, item.product.price)}></div>
        <input type="number" className="item-quantity" defaultValue={item.quantity}/>
        <div
          className={"aside-minus " + (item.quantity > 1 ? "" : 'remove')}
          onClick={() => {
            item.quantity > 1
              ? subQuantity(item.product._id, item.quantity, item.product.price)
              : removeFromCart(item.product._id)
          }}
        >
        </div>
      </div>
      <div className="aside-item__right">
        <span className='amount'>{isSale ? item.priceGroupWithSale : item.priceGroup} ₽ </span>
        <span>{item.product.weight} г</span>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addQuantity: (id, quantity, price) => dispatch(addQuantity(id, quantity, price)),
    subQuantity: (id, quantity, price) => dispatch(subQuantity(id, quantity, price)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsideItem)
