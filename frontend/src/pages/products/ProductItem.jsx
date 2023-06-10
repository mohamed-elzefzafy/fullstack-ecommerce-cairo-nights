import Rating from '../../component/rating/Rating';
import { Link } from 'react-router-dom';

const ProductItem = ({item , classNameForStyle}) => {
  return (
    <Link to={`/products/${item.id}`}  className={`${classNameForStyle}`}>
    <img src={item.image} alt={item.title} className="slide-img" />
    <h3 className="slide-title">{item.title}</h3>
    <Rating rating={item.rating} reviews={item.reviews}/>
   <div className="slide-price">$ {item.price} </div>

</Link>
  )
}

export default ProductItem