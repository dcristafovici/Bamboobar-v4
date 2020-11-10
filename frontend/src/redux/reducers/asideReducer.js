import {ADD_TO_ASIDE} from "../actions/actions-types/aside-actions"
const initialState = {
  asideItems: []
}

const asideReducer = (state = initialState, action) =>{
  switch(action.type) {
    case ADD_TO_ASIDE:
      const item = action.payload
      return{
        ...state,
        asideItems: [...state.asideItems , item]
      }
    default:
      return state
  }
}

export default asideReducer
