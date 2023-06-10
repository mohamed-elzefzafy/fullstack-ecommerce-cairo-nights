import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import { Outlet } from "react-router-dom";


const Home = () => {
  return (
<>
      <Header/>
  <Outlet/>
  <Footer/>
</>
  )
}

export default Home;