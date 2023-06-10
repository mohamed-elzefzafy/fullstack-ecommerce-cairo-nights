import "./singleproduct.css";
import { useParams } from "react-router-dom";
import ProductInfo from "../../pages/special-offer-page/ProductInfo";
import ProductDiscription from "../../pages/special-offer-page/ProductDiscription";
import { useEffect } from "react";
import Loading from "../../component/loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsbyId } from "../../redux/apiCalls/productPiCall";


const SingleProduct = () => {
  const {id} = useParams();
   const dispatch = useDispatch();
   const {product , loading} = useSelector(state => state.product)


  
  useEffect(() => {
  dispatch(fetchProductsbyId(id))
  window.scrollTo(0 , 0);
  } ,[id])
  if (loading)  return <Loading/>
if (product) 
return (
  <div className="single-product">
  <div className="product-wrabber">
      <div className="product-img-wrabber">    
          <img src={ product.image} alt={product.title} />
        </div>
          
        <div className="product-info">
        <ProductInfo product={product } id={id}/>
        </div>
      </div>
    
      <ProductDiscription/>
  </div>
    )


  }



export default SingleProduct;