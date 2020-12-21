import {
  ADD_TO_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  REMOVE_FROM_CART,
  EMPTY_CART,
  UPDATE_PRICE
} from '../actions/actions-types/aside-actions'
const initialState = {
  cart: [],
  totalPrice: 0
}

export default function asideReducer(state = initialState, action) {
  let cart = state.cart
  let cartStringify = JSON.stringify(cart)
  console.log(state)
  switch (action.type) {
    case ADD_TO_CART:
      let itemInCart = cart.find(item => item.product._id == action.payload.product._id)
      if(itemInCart)
      {
        return {
          ...state,
          cart: state.cart.map(item => {
            return item !== itemInCart
              ? item
              : { ...itemInCart,
                  quantity: itemInCart.quantity + 1,
                  priceGroup: (itemInCart.quantity + 1) * itemInCart.product.price
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
              priceGroup: (action.payload.quantity + 1) * action.payload.price
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
              priceGroup: (action.payload.quantity - 1) * action.payload.price
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
    default:
      return state
  }
}
