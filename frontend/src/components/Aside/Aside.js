import React from 'react'
import AsideControl from "./AsideControl";
import AsideItems from "./AsideItems";
import AsideDelivery from "./AsideDelivery";
import AsideDeliveryButton from "./AsideDeliveryButton";
import AsideWithoutLocation from "./AsideWithoutLocation"
import {connect} from 'react-redux'

const Aside = ({ addressReducer }) => {
  return(
    <aside className="aside">
      <AsideControl />
      {addressReducer.pickup || addressReducer.location ? (
        <React.Fragment>
          <AsideItems />
          <AsideDelivery />
          <AsideDeliveryButton />
        </React.Fragment>
        ) : (
        <AsideWithoutLocation />

      )}
    </aside>
  )
}

const mapStateToProps = (state) => {
  return {
    addressReducer: state.addressReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside)
