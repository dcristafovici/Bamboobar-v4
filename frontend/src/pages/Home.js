import React, {useState, useEffect} from "react"
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Catalog from "../components/catalog/Catalog";
import Banner from "../components/Banner/Banner";
import Menu from "../components/Menu/Menu";


const Home = () => {
  const [working, setWorking] = useState(true)
  const workTime = () => {
    const simpleNotWorking = [6, 7]
    const weekendNotWorking = [6, 7, 8, 9, 10]
    const currentDate = new Date()
    const currentTime = currentDate.getHours()
    const currentDay = currentDate.getDay()

    if (currentDay >= 1 && currentDay <= 5) {
      if (simpleNotWorking.includes(currentTime))
        setWorking(false)
    }
    if (currentDay === 6 || currentDay === 7) {
      if (weekendNotWorking.includes(currentTime)) {
        setWorking(false)
      }
    }
  }


  useEffect(() => {
    workTime()
  }, [working])

  return (
    <main className={"bamboobar-main " + (working ? "" : "not-worked")}>
      <Header/>

      <div className="main-reverse">
        {working ? (
          <React.Fragment>
            <Menu/>
            <Banner/>
          </React.Fragment>
        ): (
          <Banner />
        )}
      </div>
      {working ? (
        <Catalog/>
      ) : ""}
      <Footer/>
    </main>
  )
}

export default Home
