import "./cardItem.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const CardItem = ( {infoCard} ) => {
  return (
    <div>
      <Link to={`/item-details/${infoCard.id}`}>
        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              className="img"
              component="img"
              height="200"
              image={infoCard.img}
              sx={{
                width: "100%",
              }}
            />
            <CardContent>
              <Typography
                className="title"
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: "22px",
                  textAlign: "center",
                  fontWeight: "bold",
                  backgroundColor: "#f7d58d",
                  borderRadius: "20px",
                  fontFamily: " Almarai, sans-serif",
                  padding: "3px"
                }}
              >
                {infoCard.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
    </div>
  );
};

export default CardItem;
