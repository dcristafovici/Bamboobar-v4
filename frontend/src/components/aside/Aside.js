import React, {useState, useContext, useEffect} from "react"
import {connect, useDispatch} from "react-redux"
import {addQuantity, minQuantity} from "../../redux/actions/asideAction";
import Modal from "react-modal"
const Aside = ({asideItems, total}) =>{
  const [show, setShow] = useState(false)

  const dispatch = useDispatch()

  const handleShow = event =>{
    event.preventDefault();
    setShow(true)
  }

  const handleClose = event =>{
    event.preventDefault()
    setShow(false)
  }

  const addQuantityHandler = (id, quantity, price) => {
    dispatch(addQuantity({id, quantity, price}));
    const asideItemsJSON = JSON.stringify(asideItems)
    const totalPriceJSON = JSON.stringify(total)
    localStorage.setItem('asideItems', asideItemsJSON)
    localStorage.setItem('totalPrice', totalPriceJSON)
  }
  const minQuantityHandler = (id, quantity, price) => {
    dispatch(minQuantity({id, quantity, price}))
    const asideItemsJSON = JSON.stringify(asideItems)
    const totalPriceJSON = JSON.stringify(total)
    localStorage.setItem('asideItems', asideItemsJSON)
    localStorage.setItem('totalPrice', totalPriceJSON)
  }

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
        <div className="aside-items mCustomScrollbar _mCS_1" >
          {
            asideItems.map((item , key) => {
              return(
                <div className="aside-item" data-id={item.id} key={key}>
                  <div className="aside-item__name"><span>{item.name}</span>
                  </div>
                  <div className="aside-item__change">
                    <div className="aside-plus" onClick={() => addQuantityHandler(item.id, item.quantity, item.price)}></div>
                    <input type="text" className="item-quantity" defaultValue={item.quantity} />
                    <div className={item.quantity > 1 ? 'aside-minus' : 'aside-minus remove'} onClick={() => minQuantityHandler(item.id, item.quantity, item.price)}></div>
                  </div>
                  <div className="aside-item__right">
                    <span><span className="woocommerce-Price-amount amount"><bdi>{item.price}₽</bdi></span></span><span>750 г</span>
                  </div>
                </div>
              )
            })
          }


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

          <div className="aside-info__item"><span>Итого</span><span id="total-amount">{total} ₽</span>
          </div>
        </div>
        <div className="aside-delivery__button">
          <a href="#" onClick={handleShow}  data-text="Оформить заказ"
             className="button button-checkout"><span>Оформить заказ </span></a>
          <a href="#banner" className="aside-delivery__address button button-checkout">
            <span>Указать адресс</span>
          </a>
        </div>
        <Modal isOpen={show}
          ariaHideApp={false}
          style={{
            overlay: {
              zIndex: 100
            },
            content: {
              padding: 0,
              maxWidth: 800,
              marginLeft: 'auto',
              marginRight: 'auto',
              borderRadius: 4,
              background: '#e2cfb1'
            }
          }}
        >
          <div className="modal-close" onClick={handleClose}><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path></svg></div>
          <div className="checkout" id="checkout">
            <div className="checkout-title">Детали оплаты</div>
            <form className="form">

              <div className="form-collection">
                <div className="form-collection__name">Основные</div>
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" placeholder="Имя" />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="E-mail"/>
                  </div>
                  <div className="form-group">
                    <input type="tel" placeholder="Телефон"/>
                  </div>
                </div>
              </div>

              <div className="form-collection">
                <div className="form-collection__name">Адресс</div>
                <div className="form-row">
                  <div className="form-group form-group__full">
                    <input type="text" name="address" placeholder="Адресс"/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" name="date" placeholder="Дата"/>
                  </div>
                  <div className="form-group">
                    <input type="time" name="time"  step="3600" min="00:00"/>
                  </div>
                </div>
              </div>
            </form>
            <div className="checkout-wrapper">
              <div className="checkout-total">
                <div className="checkout-total__item">
                  <div className="checkout-total__label">Время доставки</div>
                  <div className="checkout-total__value">~60 мин</div>
                </div>
                <div className="checkout-total__item">
                  <div className="checkout-total__label">Итого</div>
                  <div className="checkout-total__value">5900 ₽</div>
                </div>
                <div className="checkout-total__item">
                  <a href="#" className="button">
                    <span>Оформить заказ</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Modal>

      </aside>

    )
}

const mapStateToProps = (state) =>{
  return{
    asideItems: state.asideReducer.asideItems,
    total: state.asideReducer.total
  }
}

export default connect(mapStateToProps)(Aside)
