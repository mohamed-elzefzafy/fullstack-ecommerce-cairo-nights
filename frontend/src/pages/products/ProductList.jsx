
// import { products } from 'data/products';
import ProductItem from './ProductItem';


const ProductList = ({products}) => {
  return (
<div className="product-list">
{
  products.map(item => 
  <ProductItem key={item.id} item={item} classNameForStyle={"product-list-style"}/>
  
  )
}
</div>
  )
}

export default ProductList;