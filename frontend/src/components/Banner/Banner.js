import React from "react"
import Find from "../find/Find";

const Banner = () => {
  return(
    <section className="banner" id="banner">
      <div className="content">
        <div className="banner-wrapper">
          <div className="banner-image">
            <img src="/images/banner/banner.jpg"
                 alt="Banner JPG"/>
          </div>
          <div className="banner-content">
            <div className="banner-logo">
              <img src="/images/banner/logo.svg"
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
