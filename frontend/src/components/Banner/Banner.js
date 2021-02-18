import React from "react"
import Find from "../find/Find";

const Banner = () => {
  return(
    <section className="banner" id="banner">
      <div className="content">
        <div className="banner-wrapper">
          <div className="banner-image">
            <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/banner/banner.jpg"
                 alt="Banner JPG"/>
          </div>
          <div className="banner-content">
            <div className="banner-logo">
              <img src="http://delivery.bamboobar.su/wp-content/themes/bamboobar/static/img/assets/banner/logo.svg"
                   alt="Logo"/>
            </div>
            <Find/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
