import React, {useState, useEffect} from 'react'
import {useSelector} from "react-redux";

const Menu = () => {

  const [scroll, setScroll] = useState(false)
  const [positions, setPositions] = useState([])
  const [bannerPosition, setBannerPosition] = useState(0)
  const [bodyHeight, setBodyHeight] = useState(0)
  const categoriesReducer = useSelector(state => state.categoriesReducer)
  const {categories } = categoriesReducer
  const allElements = document.querySelectorAll('.menu-nav li span')


  useEffect(() => {
    window.addEventListener('scroll', function (event){
      setScroll(window.scrollY > bannerPosition);
      if (window.scrollY < positions[0]) return;
      const index = positions.findIndex((el, i, arr) => window.scrollY < arr[i + 1]);

      const categoryAttribute = "[data-id=" + "'" + index + "'" + "]";
      const element = document.querySelector(categoryAttribute)

      for(let el of allElements){
        el.classList.remove('active')
      }
      if(element) element.classList.add('active')
      if(index === -1 && window.scrollY > positions[0]){
        allElements[allElements.length - 1].classList.add('active')
      }
      const heightBody = document.querySelector('body').clientHeight
      setBodyHeight(heightBody)
    })

  },[bannerPosition, positions])

  useEffect(() => {
    const element = document.getElementById('banner')
    const domRect = element.getBoundingClientRect().top + window.pageYOffset
    setBannerPosition(domRect)
  }, [])


  useEffect( () => {
    const allPoints = document.getElementsByClassName('catalog-point')
    let allPositions = []
    for(let point of allPoints){
      const position = point.getBoundingClientRect().top + window.pageYOffset - 100
      allPositions.push(position)
    }
    setPositions(allPositions)
  }, [categories, bodyHeight])


  const goToCategory = (index) => {
    const categoryAttribute = "[data-category=" + "'" + index + "'" + "]";
    const selector = document.querySelector(categoryAttribute)
    const yOffset = -60
    const y = selector.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({top: y, behavior: "smooth"})
  }



  return(
    <section className={"menu" + (scroll ? " menu-fixed" : "")} id="menu">
      <div className="content">
        <nav className="menu-nav">
          <ul>
            {categories.map((category, index) => {
              return(
                <li key={index}>
                  <span onClick={() => goToCategory(index)} data-id={index}>{category.name}</span>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </section>
  )
}


export default Menu
