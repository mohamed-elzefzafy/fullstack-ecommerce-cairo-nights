import Rating from '../../component/rating/Rating';
import PriceAndDiscount from '../../component/specialoffers/PriceAndDiscount';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import  {cartActions} from "../../redux/slices/cartSlice";


const ProductInfo = ({product , id}) => {
  const dispatch = useDispatch();
const [quantity, setquantity] = useState(1);



const addToCartHandler = () => {
dispatch(  cartActions.addItemToCart({
  id : id ,
  quantity : +quantity ,
  price : product?.price ,
  title : product?.title ,
  image : product?.image ,
  
}))

}
  return (
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
  )
}

export default ProductInfo