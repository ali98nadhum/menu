import React from "react";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import "./CardDeteils.css";

const CardDetails = ({ itemProps }) => {
  const { id } = useParams();

  const selectedItemId = parseFloat(id);

  const selectedItem = itemProps.find((item) => item.id === selectedItemId);

  if (!selectedItem) {
    return <div>لم يتم العثور على العنصر</div>;
  }

  const { price, subtitle } = selectedItem.info.item1;

  const priceKeys = Object.keys(price);
  const subtitleKeys = Object.keys(subtitle);

  return (
    <div className="content">
      <Header showBackButton={true} />
      <h1>{selectedItem.title}</h1>
      <hr />
      <Container>
        <div className="card-deteils">
          {priceKeys.map((key, index) => (
            <div className="flix" key={index}>
              <div className="price">
                <h2>{price[key]} IQD</h2>
              </div>
              <div className="title">
                <h2>{subtitle[subtitleKeys[index]]}</h2>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default CardDetails;
