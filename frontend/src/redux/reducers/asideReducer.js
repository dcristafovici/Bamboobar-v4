import {
  ADD_TO_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  REMOVE_FROM_CART,
  EMPTY_CART,
  SET_TOTAL,
  SET_PERCENT
} from '../actions/actions-types/aside-actions'
import {loadState} from '../../localStorage'

const cart = loadState()
const initialState = {
  cart: cart ? cart.cart : [],
  total: 0,
  percent: 0
}

export default function asideReducer(state = initialState, action) {
  let cart = state.cart
  switch (action.type) {
    case ADD_TO_CART:
      let itemInCart = cart.find(item => item.product._id === action.payload.product._id)
      if(itemInCart)
      {
        return {
          ...state,
          cart: state.cart.map(item => {
            return item !== itemInCart
              ? item
              : { ...itemInCart,
                  quantity: itemInCart.quantity + 1,
                  priceGroup: (itemInCart.quantity + 1) * itemInCart.priceItem,
                  priceGroupWithSale: (itemInCart.quantity + 1) * itemInCart.priceWithSale
                }
          }),
        }
      } else{
        return {
          ...state,
          cart: [...state.cart, action.payload],
        }
      }
    case ADD_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product._id === action.payload.id
          ? {...item,
              quantity : action.payload.quantity + 1,
              priceGroup: (action.payload.quantity + 1) * action.payload.price,
              priceGroupWithSale: (action.payload.quantity + 1) * action.payload.priceWithSale
            }
          : item
        ),
      }
    case SUB_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product._id === action.payload.id
            ? {...item,
              quantity : action.payload.quantity - 1 ,
              priceGroup: (action.payload.quantity - 1) * action.payload.price,
              priceGroupWithSale: (action.payload.quantity - 1) * action.payload.priceWithSale

            }
            : item
        ),
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart
          .map(item => item.product._id === action.id ? {...item, quantity: item.quantity -1}: item)
          .filter(item => item.quantity > 0)
      }
    case EMPTY_CART:
      return {
        ...state,
        cart: []
      }
    case SET_TOTAL:
      return {
        ...state,
        total: action.payload.total
      }
    case SET_PERCENT:
      return {
        ... state,
        percent: action.payload.percent
      }
    default:
      return state
  }
}
