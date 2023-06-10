import "./products.css"
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./ProductList";
import ProductSidebar from "./ProductSidebar";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../redux/apiCalls/productPiCall";
import Pagination from "./Pagination";



const Products = () => {
  const {products} = useSelector(state => state.product)
  const dispatch = useDispatch();
const [filterItem, setfilterItem] = useState("all");
const [sortItem, setsortItem] = useState("nosort");
const [currentPage, setcurrentPage] = useState(1);


  useEffect(() => {
  dispatch(fetchProducts());
  },[])

  //filter products
  const filterdProducts = products.filter((product) => 
  filterItem === "laptop" ?
  product.isLaptop === true :
  filterItem === "mobile" ?
  product.isLaptop === false :
  product
  )


    //sort products

    const sortedProducts = 
    sortItem === "low" ?
    filterdProducts.sort((a , b) => a.price - b.price) :
    sortItem === "high" ? filterdProducts.sort((a , b) => b.price - a.price) : 
    filterdProducts.sort((a , b) => a.title > b.title ? 1 : -1)


    //pagination

    const productPerPage = 6;
    const pages = Math.ceil(sortedProducts.length / productPerPage);
    const startIndex = (currentPage -1) * productPerPage
    const finishIndex = currentPage  * productPerPage
    const orderProductList = sortedProducts.slice(startIndex , finishIndex)
    




  return (
<>
      <div className="products">
        <ProductSidebar filterItem={filterItem}  setfilterItem={setfilterItem}   sortItem={sortItem} setsortItem={setsortItem}/>
        <ProductList products={orderProductList}/>
    
      </div>
      <Pagination pages={pages} currentPage={currentPage} setcurrentPage={setcurrentPage} />
</>
  )
}


export default Products;