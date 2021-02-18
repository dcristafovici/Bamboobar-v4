import React from "react"
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Catalog from "../components/catalog/Catalog";
import Banner from "../components/Banner/Banner";
import Menu from "../components/Menu/Menu";


const Home = () =>{

  return(
    <main className="bamboobar-main">
      <Header/>
      <div className="main-reverse">
        <Menu />
        <Banner />
      </div>
      <Catalog />
      <Footer/>
    </main>
  )
}

export default Home
