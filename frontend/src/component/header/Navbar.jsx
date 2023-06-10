import { Link } from "react-router-dom";


const Navbar = ({toggle , settoggle}) => {
  return (
    <nav style={{right :  toggle && "0" }} className="navbar">
    <div className="navbar-close-icon" >
    <i className="bi bi-x-circle-fill" onClick={() => settoggle(false)}></i>
    </div>
    <ul className="navbar-links">
      <Link to="/" className="navbar-link" onClick={() => settoggle(false)}>الصفحه الرئیسیه</Link>
      <Link to="/products" className="navbar-link" onClick={() => settoggle(false)}> جميع المنتجات</Link>
      <Link to="/register" className="navbar-link" onClick={() => settoggle(false)}> تسجيل الدخول</Link>

    </ul>

  </nav>
  )
}

export default Navbar;