import { productAction } from "../../redux/slices/productSlice";


// fetchproducts 
export function fetchProducts () {
  return async (dispatch) => {
try {
  const response = await fetch("https://cairo-nights-ecommerce.onrender.com/products");
  const data = await response.json();
dispatch(productAction.setProducts(data))
} catch (error) {
  console.log(error);
}
  }
}


// get product by id
export function fetchProductsbyId (id) {
  return async (dispatch) => {
try {
  dispatch(productAction.setLoading())
  const response = await fetch(`https://cairo-nights-ecommerce.onrender.com/products/${id}`);
  const data = await response.json();
dispatch(productAction.setProduct(data));
dispatch(productAction.clearLoading())
} catch (error) {
  dispatch(productAction.clearLoading())
}
  }
}

