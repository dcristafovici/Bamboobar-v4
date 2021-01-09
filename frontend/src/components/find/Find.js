import React, {useState} from "react"
import { YMaps, Map } from "react-yandex-maps";
import {connect} from 'react-redux'
import {clearUserAddress, setUserAddress} from "../../redux/actions/addressAction"


const Find = ({setUserAddress , addressState, clearUserAddress}) => {

  const loadSuggest = ymaps => {
    const suggestView = new ymaps.SuggestView("suggest");
    const bambooCords = [55.747159, 37.539070]
    suggestView.events.add("select", (e) => {
      const displayName = e.get('item').displayName
      let myGeocoder = ymaps.geocode(displayName);
      myGeocoder.then(
        async function (res) {
          const coords = await res.geoObjects.get(0).geometry._coordinates;
          let distance = ymaps.coordSystem.geo.getDistance(bambooCords, coords);
          distance = parseInt(distance);
          distance = distance / 1000;
          setUserAddress(displayName, distance)
        }
      )
    });
  };
  return(
    <div className="banner-find">
      <h1>Быстрая Доставка из лучшего ресторана<br/>в москва-СИТИ bamboo.bar</h1>

      <div className={"form-group " + (addressState.distance ? 'form-group__selected' : '')}>
        <YMaps
          enterprise
          query={{
            apikey: "0a8d2b6c-a129-4df5-be51-bbaabc237547",
          }}
          >
          <Map
            onLoad={ymaps => loadSuggest(ymaps)}
            defaultState={{ center: [55.751574, 37.573856],  zoom: 9 }}
            modules={["SuggestView", "geocode", "coordSystem.geo"]}
          />
          <input type="text" id='suggest' placeholder='Указать адрес' defaultValue={addressState.address || ''}  />
        </YMaps>
        <div className="form-group__clear" onClick={() => clearUserAddress()}>
          <span>Изменить</span>
          <img
            src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/banner/pencil.svg"
            alt="" />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    addressState: state.addressReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setUserAddress: (address, distance) => dispatch(setUserAddress(address,distance)),
    clearUserAddress: () =>dispatch(clearUserAddress())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Find)
