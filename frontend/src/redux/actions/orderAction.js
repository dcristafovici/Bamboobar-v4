import {ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAIL} from './actions-types/order-actions'
import axios from "axios";

export const listOrders = (id) => async(dispatch) => {
  try{
    dispatch({ type: ORDER_REQUEST })

    const { data } = await axios.post('/api/order/byUser', {id: id})

    dispatch({
      type: ORDER_SUCCESS,
      payload: data
    })

  } catch (error){
    dispatch({
      type: ORDER_FAIL,
      payload: error.response && error.response.data.message
    })
  }
}
