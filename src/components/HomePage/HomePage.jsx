import "./homePage.css";
import logo from "../../assets/logo.jpg";
import coffeeImg from "../../assets/coffee.png";
import { FaLocationDot } from "react-icons/fa6";
import Button from '@mui/material/Button';


const HomePage = () => {
  return (
    <main>
      <div className="content">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="cover">
            <img src={coffeeImg} alt="" />
        </div>
        <div className="btn">
        <a href="/catogory-menu"><Button variant="contained" className="menu-btn">Menu</Button></a>
        </div>
        <div className="footer">
            <p>المنصور  -  شارع النقابات</p>
            <FaLocationDot className="icon" style={{ color: '#1ecbe1',  fontSize:'20px'}}/>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
