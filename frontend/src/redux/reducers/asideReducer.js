import {ADD_TO_ASIDE, ADD_QUANTITY, SUB_QUANTITY} from "../actions/actions-types/aside-actions"

let itemsInitial = localStorage.getItem('asideItems')
let priceInitial = localStorage.getItem('totalPrice')
if(itemsInitial) itemsInitial = JSON.parse(itemsInitial)

if(priceInitial) priceInitial = JSON.parse(priceInitial)


const initialState = {
  asideItems: itemsInitial || [],
  total: priceInitial || 0
}

const asideReducer = (state = initialState, action) =>{
  switch(action.type) {
    case ADD_TO_ASIDE:
      const item = action.payload
      const existItem =  state.asideItems.find(item => action.payload.id === item.id)
      if(existItem)
      {
        return{
          ...state,
          asideItems: state.asideItems.map(mapItem => item.id === mapItem.id ? {...mapItem, quantity: mapItem.quantity + 1} : mapItem),
          total: state.total + item.price,
        }

      }
      else{
        return{
          ...state,
          asideItems: [...state.asideItems , item],
          total: state.total + item.price
        }

      }

    case ADD_QUANTITY:
      const itemToAdd = action.payload
      return{
        ...state,
        asideItems: state.asideItems.map(mapedItem => itemToAdd.id === mapedItem.id ? {...mapedItem, quantity: mapedItem.quantity + 1} : mapedItem),
        total: state.total + itemToAdd.price
      }
    case SUB_QUANTITY:
      const itemToSub = action.payload
      const itemToSubQuantity = action.payload.quantity
      if(itemToSubQuantity > 1){
        return{
          ...state,
          asideItems: state.asideItems.map(currentItem => itemToSub.id === currentItem.id ? {...currentItem, quantity: currentItem.quantity - 1}: currentItem),
          total: state.total - itemToSub.price
        }
      }
      else{
        return {
          ...state,
          asideItems: state.asideItems.map(currentItem => itemToSub.id === currentItem.id ? {...currentItem, quantity: currentItem.quantity - 1}: currentItem),
          total: state.total - itemToSub.price
        }
      }
    default:
      return state
  }
}

export default asideReducer
