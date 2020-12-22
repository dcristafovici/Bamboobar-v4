import React, {useState} from "react"
import axios from 'axios'
import { YMaps, Map } from "react-yandex-maps";
const Find = () => {
  const [address,setAddress] = useState({
    address: ''
  })

  const loadSuggest = ymaps => {
    const suggestView = new ymaps.SuggestView("suggest");
    console.log(suggestView)
  };


  return(
    <div className="banner-find">
      <h1>Быстрая Доставка из лучшего ресторана<br/>в москва-СИТИ bamboo.bar</h1>
      {/*<YMaps>*/}
      {/*  <Map*/}
      {/*    onLoad={ymaps => loadSuggest(ymaps)}*/}
      {/*    defaultState={{ center: [55.751574, 37.573856],  zoom: 9 }}*/}
      {/*    modules={["SuggestView"]}*/}
      {/*  />*/}
      {/*  <input type="text" id='suggest' onChange={ymaps => console.log(ymaps)}  />*/}
      {/*</YMaps>*/}

      <div className="form-group ">
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
