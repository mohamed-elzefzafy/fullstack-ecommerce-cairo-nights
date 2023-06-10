import "./slider.css";
import { useState } from "react";
import ProductItem from "../../pages/products/ProductItem";




const Slider = ({items}) => {
  const [sliderIndex, setsliderIndex] = useState(0);

  const handleClick = (dir) => {
    
    if (dir === "left")
    {
      setsliderIndex(sliderIndex + 1)
    } else if (dir === "right")
    {
      setsliderIndex(sliderIndex - 1)
    }
  }
  return (
  <div className="slider-container">
  
{sliderIndex !== items.length &&  <button className="bi bi-chevron-left arrow-left" onClick={() => handleClick("left")}></button>}

 <div className="slider-wrabber" style={{transform : `translatex(${sliderIndex * 250}px)`}}>

 {
    items.map( item =>
<ProductItem key={item.id} item={item} classNameForStyle={"slide"}/>
)}

 </div>
{sliderIndex !== 0 &&  <button className="bi bi-chevron-right arrow-right"onClick={() => handleClick("right")}></button>}




  </div>
  )
}

export default Slider;