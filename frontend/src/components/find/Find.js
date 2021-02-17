import React, {useState, useRef, useEffect} from "react"
import {YMaps, Map} from "react-yandex-maps";
import GeoCoordinates from '../../misc/delivery.json'
import {connect} from 'react-redux'
import {clearAddress, setAddress} from "../../redux/actions/AddressAction";


const Find = ({setAddress, addressReducer, clearAddress}) => {
  const map = useRef(null)
  const [cords, setCords] = useState()
  const [obymaps, setYmaps] = useState(null)
  const [location, setLocation] = useState()

  useEffect(() => {
    if (obymaps && map.current) {
      const deliveryZones = obymaps.geoQuery(GeoCoordinates).addToMap(map.current)
      if (cords) {
        const setRes = deliveryZones.searchContaining(cords)._objects[0]
        if (typeof setRes !== 'undefined') {
          const properties = setRes.properties._data
          setAddress(location, properties, cords)
        }
      }
    }
  }, [map, obymaps, cords])

  const loadSuggest = ymaps => {
    setYmaps(ymaps)
    const suggestView = new ymaps.SuggestView("suggest");
    suggestView.events.add("select", (e) => {
      const displayName = e.get('item').displayName
      let myGeocoder = ymaps.geocode(displayName);
      myGeocoder.then(
        async function (res) {
          const coords = await res.geoObjects.get(0).geometry._coordinates;
          setLocation(displayName)
          setCords(coords)
        }
      )
    });
  };
  return (
    <div className="banner-find">
      <h1>Быстрая Доставка из лучшего ресторана<br/>в москва-СИТИ bamboo.bar</h1>
      <div className={"form-group " + (addressReducer.location ? 'form-group__selected' : '')}>
        <YMaps
          enterprise
          query={{
            apikey: "0a8d2b6c-a129-4df5-be51-bbaabc237547",
          }}
        >
          <Map
            instanceRef={map}
            onLoad={ymaps => loadSuggest(ymaps)}
            defaultState={{center: [55.747159, 37.539070], zoom: 9}}
            modules={["SuggestView", "geocode", "coordSystem.geo", "geoQuery", "geoObject.addon.balloon", "geoObject.addon.hint"]}
          />
          <input type="text" id='suggest' placeholder='Указать адрес' defaultValue={addressReducer.location}/>
        </YMaps>
        <div className="form-group__clear" onClick={() => clearAddress()}>
          <span>Изменить</span>
          <img
            src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/banner/pencil.svg"
            alt=""/>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = state => {
   return {
    addressReducer: state.addressReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAddress: (location, data, coords) => dispatch(setAddress(location, data, coords)),
    clearAddress: () => dispatch(clearAddress())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Find)
