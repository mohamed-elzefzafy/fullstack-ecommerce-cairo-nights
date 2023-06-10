import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const TopHeader = ({settoggle}) => {


  const {cartItems} = useSelector(state => state.cart)
  return (
    <div className="top-header">
       <div className="top-header-menu" onClick={() => settoggle(true)}>
     <i className="bi bi-list"></i>
        
    </div>
    <Link to="/" className="top-header-logo" >
         <i className="bi bi-basket2" ></i>
         ليالى القاهره للإلكترونيات
    </Link>
    <div className="middle-header-search-box">
      <input type="search" placeholder="ماذا ترید؟" />
      <button className="search-box-btn">ابحث</button>

    </div>
  
    <Link to="/cart" className="middle-header-shopping-cart">
    سله التسوق
      <i className="bi bi-cart3">{cartItems.length > 0 &&  <b className="cart-notification">{cartItems.length}</b>}</i>
      
    </Link>

  </div>
  )
}

export default TopHeader;