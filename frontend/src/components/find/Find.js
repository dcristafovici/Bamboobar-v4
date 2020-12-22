import React, {useState} from "react"
import axios from 'axios'
const Find = () => {
  const [address,setAddress] = useState({
    address: ''
  })


  const onChangeHandler = event => {
    setAddress({address: event.target.value})
  }
  const onClickHandler = async(event) => {
    event.preventDefault()
    console.log(address)
    try{
      const response = await axios.post('/api/address/find', address)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }
  return(
    <div className="banner-find">
      <h1>Быстрая Доставка из лучшего ресторана<br/>в москва-СИТИ bamboo.bar</h1>
      <div className="form-group ">
        <input id="suggest" onChange={onChangeHandler} placeholder="Укажите адрес доставки..." autoComplete="off"/>
        <button onClick={onClickHandler}>click</button>
        <div className="form-group__clear">
          <span>Изменить</span>
          <img
            src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/banner/pencil.svg"
            alt="" />
        </div>
      </div>
    </div>
  )
}

export default Find
