import Rating from "../../component/rating/Rating";
import { useState } from "react";
import { Link } from "react-router-dom";
import PriceAndDiscount from "./PriceAndDiscount";


const Offer = ({offer}) => {

  const [imagesrc, setimagesrc] = useState(offer.firstImage);

  return (
  <div className="offer">
    <div className="offer-image-wrabber">
      <img  onMouseEnter={() => setimagesrc(offer.secondImage)} 
        onMouseLeave={() => setimagesrc(offer.firstImage)}  
        src={imagesrc}   alt={offer.title} className="offer-img" />
      </div>
  <div className="offer-info">
    <h5 className="offer-title">{offer.title}</h5>
  <Rating  rating={offer.rating} reviews={offer.reviews}/>
<PriceAndDiscount offer={offer}/>
    <Link to={`/special-offer/${offer.id}`} className="offer-see-more">
              شاهد المزيد ...
    </Link>
    <div className="offer-discount">خصم {offer.discount}%</div>
  </div>
  </div>
  )
}

export default Offer;