import CardItem from "../CardItem/CardItem";
import Header from "../Header/Header";
import Container from "../Container/Container";
import "./Catofory.css";
import Footer from "../Footer/Footer";

const Catogory = ({ itemProps }) => {
  return (
    <div>
      <Header />
      <Container>
        <div className="grid">
          {itemProps.map((item) => {
            return <CardItem infoCard={item} />;
          })}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Catogory;
