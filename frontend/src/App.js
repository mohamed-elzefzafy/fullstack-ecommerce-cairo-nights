
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import HomeIndex from "./pages/home/HomeIndex";
import Cart from "./pages/cart/Cart";
import Products from "./pages/products/Products";
import SingleProduct from "./pages/single-product/SingleProduct";
import SpecialOfferPage from "./pages/special-offer-page/SpecialOfferPage";
import Register from "./pages/forms/Register";
import Login from "./pages/forms/Login";



const router = createBrowserRouter([{
  path : "/",
  element : <Home/>,
  children : [
    { index : true , element : <HomeIndex/> },
    { path : "/cart" , element :  <Cart/> },
    { path : "/products" , element :  <Products/> },
    { path : "/products/:id" , element :  <SingleProduct/> },
    { path : "/special-offer/:id" , element : <SpecialOfferPage/> },
    { path : "/register" , element : <Register/> },
    { path : "/login" , element : <Login/> },
  ]
}])

function App() {
  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
