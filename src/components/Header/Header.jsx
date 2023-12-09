import { Container } from "@mui/system";
import "./header.css";
import logo from "../../assets/nav-logo.png";
import { IoArrowBackSharp } from "react-icons/io5";

const Header = ({ showBackButton }) => {
  return (
    <header>
      <Container>
        <div className="navbar">
          {showBackButton && (
            <a href="/catogory-menu">
              <IoArrowBackSharp className="icon" />
            </a>
          )}

          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
