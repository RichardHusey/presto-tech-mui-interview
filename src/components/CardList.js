import {
  Box,
  CardContent,
  Grid,
  Typography,
  Card,
  Rating
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss";

export const CardList = ({ cardList }) => {
  return (
    <Box sx={{ marginTop: 2 }}>
      <Grid container spacing={2}>
        {cardList.map((res) => {
          return (
            <Grid item xs={12} md={3}>
              <Card
                key={res.title}
                sx={{
                  mb: { xs: 1, lg: 2 },
                  height: "700px"
                }}
              >
                <CardContent>
                  <div className="carousel-container">
                    <Carousel
                      className="carousel-wrapper"
                      dynamicHeight
                      swipeable
                    >
                      {res.images.map((image) => {
                        return <img alt={image} key={image} src={image} />;
                      })}
                    </Carousel>
                  </div>
                  <Typography>Title: {res.title}</Typography>
                  {
                    <Rating
                      name="read-only"
                      value={res.rating}
                      precision={0.1}
                      readOnly
                    />
                  }
                  <Typography style={{ fontSize: "12px" }}>
                    <b>Address</b>: {res.address}
                  </Typography>
                  <Typography style={{ fontSize: "12px" }}>
                    <b>Phone</b>: {res.phone}
                  </Typography>
                  <Typography style={{ fontSize: "12px" }}>
                    <b>Open/Closed:</b> {res.open_now ? "Open" : "Closed"}
                  </Typography>
                  <Typography style={{ fontSize: "12px" }}>
                    {/* Rating: {res.rating} */}
                    <b>Rating:</b>
                    {res.rating}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
