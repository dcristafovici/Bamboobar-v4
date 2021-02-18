import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";

const Menu = () => {

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', function (event){
      setScroll(window.scrollY > 172);
    })
  },[])

  useEffect(() => {
    const element = document.getElementById('banner')
    const domRect = element.getBoundingClientRect()
  }, [])


  const categoriesReducer = useSelector(state => state.categoriesReducer)
  const{ loading , errors, categories } = categoriesReducer

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
