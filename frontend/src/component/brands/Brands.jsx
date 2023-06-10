import  "./brands.css";
import {brands} from "../../data/brands"

const Brands = () => {
  return (
  <div className="brands-wrabber">
    {brands.map((brand) => 
    <div className="brand" key={brand.id}>
      <img className="brands-img" alt="" src={brand.image}/>
    </div>
    )}
  </div>
  )
}

export default Brands;