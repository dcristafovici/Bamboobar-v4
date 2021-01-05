import React from "react"
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Find from "../components/find/Find";
import Catalog from "../components/catalog/Catalog";

const Home = () =>{
  return(
    <main className="bamboobar-main">
      <Header/>
      <div className="main-reverse">
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
      </div>
      <Catalog />
      <Footer/>
    </main>
  )
}

export default Home
