import { useState } from "react";
import "./header.css";
import TopHeader from "./TopHeader";

import Navbar from "./Navbar";

const Header = () => {
  const [toggle , settoggle] = useState(false);
  return (
  <header className="header">
  <TopHeader settoggle={settoggle}/>

  
<Navbar toggle={toggle} settoggle={settoggle}/>
  </header>
  )
}

export default Header;