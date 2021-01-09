import React,{Component} from "react"
import {connect} from 'react-redux'
import Modal from "../modal/Modal"
import {addQuantity} from "../../redux/actions/asideAction"
import {subQuantity} from '../../redux/actions/asideAction'
import {removeFromCart} from '../../redux/actions/asideAction'
import {emptyCart} from '../../redux/actions/asideAction'

class Aside extends Component{
  render() {
    let totalPrice = 0;
    this.props.cart.forEach(cart => {
      totalPrice += cart.priceGroup;
    })
    let differencePrice =  this.props.minPrice - totalPrice;
    let percentPrice = totalPrice/this.props.minPrice * 100
    function smoothToBanner(event) {
      event.preventDefault()
      let element = document.getElementById('banner')
      element.scrollIntoView({ behavior: 'smooth' })
    }
    return(
      <aside className="aside aside-ready" data-delivery="5000">
        <div className="aside-control">
          <div className="aside-title"><span>Мой заказ</span>
          </div>
          <div className="aside-close" onClick={() => this.props.emptyCart()}>
            <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/aside/close.svg"
                 alt="Close" />
          </div>
        </div>
        {(this.props.address.delivery) ? (
          <React.Fragment>
            <div className="aside-items">
              {this.props.cart.map((item, key) => (
                <div className="aside-item" data-id={item.product._id} key={key}>
                  <div className="aside-item__name"><span>{item.product.name}</span></div>
                  <div className="aside-item__change" key={item.quantity}>
                    <div className="aside-plus" onClick={() => this.props.addQuantity(item.product._id, item.quantity, item.product.price)}></div>
                    <input type="number" className="item-quantity" defaultValue={item.quantity || 1}/>
                    <div
                      className={"aside-minus "  + (item.quantity > 1 ? '' : 'remove')}
                      onClick={() =>{
                        item.quantity > 1 ? this.props.subQuantity(item.product._id, item.quantity, item.product.price)
                        : this.props.removeFromCart(item.product._id)
                        }
                      }>
                    </div>
                  </div>
                  <div className="aside-item__right">
                    <span><span className="amount"><bdi>{item.priceGroup}₽</bdi></span></span><span>{item.product.weight} г</span>
                  </div>
                </div>
              ))}
              </div>

            <div className="aside-delivery">
              <div className="aside-delivery__min">заказ по данному адресу возможен от <span
                id="min_delivery">{this.props.minPrice}</span> ₽
              </div>
              {differencePrice > 0 ? (
              <div className="aside-delivery__name">
                <span>Закажите ещё на
                  <span id="remaind"> {differencePrice}</span> ₽ для бесплатной доставки
                </span>
              </div>
                ): ""}
              <div className="aside-delivery__count"><span>{totalPrice} ₽ </span><span>{this.props.minPrice} ₽</span>
              </div>
              <div className="aside-delivery__line">
                <div className="aside-delivery__fill" style={{width: percentPrice + '%'}} >
                  <span> {totalPrice}  ₽</span></div>
              </div>
            </div>

            <div className="aside-delivery__info">
              <div className="aside-info__item"><span>Время доставки</span><span>~60 мин</span>
              </div>

              <div className="aside-info__item"><span>Итого</span><span id="total-amount">{totalPrice} ₽</span>
              </div>
            </div>
        </React.Fragment>
          ) : (
            <>
            </>
          )}
        <div className="aside-delivery__button">
          {(this.props.address.delivery) ? (
            <Modal cart={this.props.cart} totalPrice={totalPrice} />
          ):(
            <a href="#banner" onClick={smoothToBanner} className="button button-checkout">
              <span>Указать адресс</span>
            </a>
          )}
        </div>
      </aside>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    cart: state.asideReducer.cart,
    minPrice: state.addressReducer.minPrice,
    address: state.addressReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addQuantity: (id, quantity, price) => dispatch(addQuantity(id, quantity, price)),
    subQuantity: (id, quantity, price) => dispatch(subQuantity(id, quantity, price)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    emptyCart: () => dispatch(emptyCart())
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Aside)
