import "./specialoffers.css";
import {specialOffers} from "../../data/special-offers"
import Offer from "./Offer";

const SpecialOffers = () => {
  return (
    <div className="specialOffers">
      <h1 className="special-offers-title">
             عروض كبيره لليوم
        <span className="special-offers-icon-wrabber">
          <i className="bi bi-stopwatch"></i> لمدة 24 ساعه فقط
        </span>
      </h1>
      <div className="special-offers-wrabber">
      { specialOffers.map(offer => <Offer key={offer.id} offer={offer}/> )}
      </div>
    </div>
  )
}

export default SpecialOffers;