import React,{Component} from "react"
import {connect} from 'react-redux'
import {addQuantity} from "../../redux/actions/asideAction"
import {subQuantity} from '../../redux/actions/asideAction'

class Aside extends Component{



  render() {
    return(
      <aside className="aside aside-ready" data-delivery="5000">
        <div className="aside-control">
          <div className="aside-title"><span>Мой заказ</span>
          </div>
          <a href="http://delivery.bamboobar.su?clear-cart" className="aside-close">
            <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/aside/close.svg"
                 alt="Close" />
          </a>
        </div>
        <div className="aside-items">
          {this.props.cart.map((item, key) => (
            <div className="aside-item" data-id={item.product._id} key={key}>
              <div className="aside-item__name"><span>{item.product.name}</span></div>
              <div className="aside-item__change">
                <div className="aside-plus" onClick={() => this.props.addQuantity(item.product._id)}></div>
                <input type="number" className="item-quantity" defaultValue={item.quantity}/>
                <div className={"aside-minus "  + (item.quantity > 1 ? '' : 'remove')} onClick={() => this.props.subQuantity(item.product._id)}></div>
              </div>
              <div className="aside-item__right">
                <span><span className="woocommerce-Price-amount amount"><bdi>{item.product.price}₽</bdi></span></span><span>{item.product.weight} г</span>
              </div>
            </div>
          ))}
        </div>
        <div className="aside-delivery">
          <div className="aside-delivery__min">заказ по данному адресу возможен от <span
            id="min_delivery">5000</span> ₽
          </div>
          <div className="aside-delivery__name" ><span>Закажите ещё на <span
            id="remaind"></span> ₽ для бесплатной доставки</span>
          </div>
          <div className="aside-delivery__count"><span>0 ₽ </span><span>5000 ₽</span>
          </div>
          <div className="aside-delivery__line">

            <div className="aside-delivery__fill" >
              <span >5650  ₽</span></div>
          </div>
        </div>

        <div className="aside-delivery__info">
          <div className="aside-info__item"><span>Время доставки</span><span>~60 мин</span>
          </div>

          <div className="aside-info__item"><span>Итого</span><span id="total-amount"> ₽</span>
          </div>
        </div>
        <div className="aside-delivery__button">
          <a href="#"   data-text="Оформить заказ"
             className="button button-checkout"><span>Оформить заказ </span></a>
          <a href="#banner" className="aside-delivery__address button button-checkout">
            <span>Указать адресс</span>
          </a>
        </div>
      </aside>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    cart: state.asideReducer.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addQuantity: (id) => dispatch(addQuantity(id)),
    subQuantity: (id) => dispatch(subQuantity(id))
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Aside)
