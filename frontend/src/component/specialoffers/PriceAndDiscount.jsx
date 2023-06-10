

const PriceAndDiscount = ({offer}) => {


  const calculatedDiscount = offer.price - (offer.discount * offer.price)/100;
  return (
    <div className="offer-price">
   {offer.discount  &&   
     <div>
     <b className="offer-price-item">${offer.price}</b>
   
     <b className="offer-final-price-item">${calculatedDiscount}</b>
 </div>
   }

{!offer.discount  &&   
     <div>
     
  
     <b style={{color : "crimson"}} className="offer-final-price-item"> <span style={{color : "black"}}>السعر</span>  {"  "}   {offer.price}$ </b>
 </div>
   }


  </div>
  )
}

export default PriceAndDiscount