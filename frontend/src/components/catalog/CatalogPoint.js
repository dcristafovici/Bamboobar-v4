import React,{useState, useEffect} from "react"
import CatalogItem from "./CatalogItem";
import { useInView } from 'react-intersection-observer';


const CatalogPoint = ({category, products, index}) => {
  const [status, setStatus] = useState(false)
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if(inView)
      setStatus(true)
  }, [inView])
  return(
    <div className="catalog-point" ref={ref}  data-category={index} >
      <div className="title">
        <h2>{category.name}</h2>
      </div>
      <div className="catalog-items">
       <CatalogItem  products={status ? products : []}  />
      </div>
    </div>
  )
}

export default CatalogPoint
