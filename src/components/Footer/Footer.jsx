import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Container from "../Container/Container";


const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="content">
          <div className="left-side">
            <h3>Lusail Cafe</h3>
            <p>Lusail cafe is that specialist cafe in iraq</p>
          </div>
          <div className="right-side">
            <h2>Social Media</h2>
            <div className="icon-side">
                <a href="https://instagram.com/lusail_cafe?igshid=MTNiYzNiMzkwZA=="><FaInstagram className="insta-icon" /></a>
                <a href="tel:+7705985657"><FaWhatsapp  className="whats-icon"/></a>
            </div>
          </div>
        </div>
        <hr className="line" />
        <p>Development by Ali Nadhum</p>
      </Container>
    </footer>
  );
};

export default Footer;
