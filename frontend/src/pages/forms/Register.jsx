
import { Link } from "react-router-dom";
import "./forms.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {

const [email, setemail] = useState("");
const [userName, setuserName] = useState("");
const [password, setpassword] = useState("");
const [showPassword, setshowPassword] = useState(false);

const formSubmitHandler = (e) => {
  e.preventDefault();

  if (email.trim() === "") return toast.error("email is required");
  if (userName.trim() === "") return toast.error("username is required");
  if (password.trim() === "") return toast.error("password is required")
}

const showPasswordHandler = () => {
  setshowPassword(prev => !prev)
}


    return (
      <div dir="rtl" className="form-wrabber">

        <ToastContainer theme="colored"/>

        <h1 className="form-title">إنشاء حساب جديد</h1>
        <form onSubmit={formSubmitHandler}  className="form">
          <input value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder='Email' />
          <input value={userName} onChange={(e) => setuserName(e.target.value)} type="text" placeholder='Username' />
          <input  value={password} onChange={(e) => setpassword(e.target.value)} 
          type={showPassword? "text" : "password"} placeholder='Password' />

      
          {showPassword ?   <i onClick={showPasswordHandler} className="bi bi-eye-slash-fill register-show-password-icon"></i> 
            : <i onClick={showPasswordHandler} className="bi bi-eye-fill register-show-password-icon"></i> }
        
        
    
          
          <button className="form-btn">الدخول</button>
        </form>
        <div className="form-footer">
          هل لديك حساب بالفعل ؟  {" "}
          <Link to="/login" >الدخول</Link>
        </div>
      </div>
    );
}

export default Register;
