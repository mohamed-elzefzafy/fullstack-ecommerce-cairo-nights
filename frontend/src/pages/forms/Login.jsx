
import { Link } from "react-router-dom";
import "./forms.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {

const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const [showPassword, setshowPassword] = useState(false);

const formSubmitHandler = (e) => {
  e.preventDefault();

  if (email.trim() === "") return toast.error("email is required");
  if (password.trim() === "") return toast.error("password is required")
}

const showPasswordHandler = () => {
  setshowPassword(prev => !prev)
}


    return (
      <div dir="rtl" className="form-wrabber">

        <ToastContainer theme="colored"/>

        <h1 className="form-title">تسجيل الدخول لحسابك</h1>
        <form onSubmit={formSubmitHandler}  className="form">
          <input value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder='Email' />
          <input  value={password} onChange={(e) => setpassword(e.target.value)} 
          type={showPassword? "text" : "password"} placeholder='Password' />

      
          {showPassword ?   <i onClick={showPasswordHandler} className="bi bi-eye-slash-fill show-password-icon"></i> 
            : <i onClick={showPasswordHandler} className="bi bi-eye-fill show-password-icon"></i> }
        
        
    
          
          <button className="form-btn">الدخول</button>
        </form>
        <div className="form-footer">
        ليس لديك حساب ؟  {" "}
          <Link to="/register" >إنشاء حساب</Link>
        </div>
      </div>
    );
}

export default Login;
