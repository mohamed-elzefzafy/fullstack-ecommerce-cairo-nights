import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { cartActions } from "./../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.cart)
  const navigate = useNavigate();

  return (
    <div className="cart">


  {cartItems.length > 0  ?    
<>
      <h1 className="cart-title">سلة التسوق</h1>
    <div className="cart-wrabber">
  
          <div className="cart-items">
          {cartItems.map((item) => 
        
        <div key={item.id} className="cart-item">
        <div className="cart-item-img-wrabber">
          <img src={item.image} alt={item.title} className="cart-item-img" />
          </div>
          <div className="cart-item-info">
          <div className="cart-item-title">{item.title}</div>
          <div className="cart-item-quantity">
            الكميه :
            <span>{item.quantity}</span>
          </div>
  
          <div className="cart-item-price">
            السعر :
            <span> {item.price * item.quantity} </span>
          </div>
          <i onClick={()=> dispatch(cartActions.removeItemFromCart(item))} className="bi bi-trash-fill cart-item-delete-icon"></i>
          </div>
       </div>
        )}
          </div>
          <div className="cart-summary">
            <div className="cart-summary-text">
              <i className="bi bi-check-circle-fill"></i>
            جزء من طلبك مؤهل للشحن المجانى قم بتحديد هذا الخيار عند الدفع 
            </div>
            <div className="cart-summary-total">
               المجموع :
              <span>
                 {cartItems.reduce((acc , cur) => acc + (cur.price  * cur.quantity) , 0)}$
              </span>
            </div>
            <button className="cart-summary-btn">تابع عمليات الشراء</button>
          </div>
        </div>
</> : <div style={{height : "300px" , paddingRight : "30px" }}>
        <h1 style={{fontSize : "28px" , fontWeight:"600"}} className="cart-title">سلة التسوق فارغه</h1>
        <button onClick={() => navigate("/products")} style={{width : "300px" , marginTop : "50px"}}  className="add-to-cart-btn">يمكنك متابعة التسوق من هنا</button>
      </div>}
    </div>
  )
}

export default Cart