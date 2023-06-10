import "./specialofferpage.css";
import { useParams } from 'react-router-dom';
import {specialOffers} from "../../data/special-offers";
import { useEffect, useState } from "react";
import ProductDiscription from "../special-offer-page/ProductDiscription";
import Rating from "../../component/rating/Rating";
import PriceAndDiscount from "../../component/specialoffers/PriceAndDiscount";
import { useDispatch } from "react-redux";
import  {cartActions} from "../../redux/slices/cartSlice";



const SpecialOfferPage = () => {

  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);
  const {id} = useParams();

  const product = specialOffers.find((item) => item.id === +id)
const [imageIndex, setimageIndex] = useState(0);


useEffect(()=>{
  window.scrollTo(0,0);
} , []);


const addToCartHandler = () => {
  dispatch(  cartActions.addItemToCart({
    id : id ,
    quantity : +quantity ,
    price : product?.price ,
    title : product?.title ,
    image : product?.images[0] ,
    
  }))
  }
  return (
  <>
  <div className="special-offers-page">
      <div className="special-offers-page-img-wrapper">
        <img
          src={product.images[imageIndex]}
          alt=""
          className="special-offers-page-img"
        />
        <div className="special-offers-page-select">
          {product.images.map((img, index) => (
            <img
              onClick={() => setimageIndex(index)}
              className="select-img"
              key={index}
              src={img}
              alt=""
            />
          ))}
        </div>
      </div>




      <div className="special-offers-page-info">
    <h3 className="special-offers-page-title">{product.title}</h3>
    <Rating rating={product.rating} reviews={product.reviews} />
  <PriceAndDiscount offer={product}/>
    <div className="special-offers-add-to-cart">
        <div>الکمیه</div>
        <input value={quantity} onChange={(e) => setquantity(e.target.value)} type="number" min="1" max="10" />
        <button onClick={addToCartHandler}  className="add-to-cart-btn">إضافه الی سله التسوق</button>
      </div>
  </div>






    </div>
         <ProductDiscription/>
  </>
  )
}

export default SpecialOfferPage;