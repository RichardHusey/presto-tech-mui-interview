import { useState } from "react";
import { Grid, Alert } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { Search } from "./components/Search";
import { CardList } from "./components/CardList";

import "./styles.css";

const API_URL = `https://8b3kdsuglk.execute-api.us-east-1.amazonaws.com/production/location/search`;

export default function App() {
  const [loading, setLoading] = useState(false);
  const [cardList, setCardList] = useState([]);
  const [empty, setEmpty] = useState(false);

  const fetchCards = async (keyword, location) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${API_URL}?keyword=${keyword}&address=${location}`
      );
      const { result } = await response.json();
      setCardList(result || []);
      if (!result.length) setEmpty(true);
      else {
        setEmpty(false);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Grid container>
      <Search search={fetchCards} />
      <Grid item xs={12} md={12}>
        {loading && <LoadingButton loading>Submit</LoadingButton>}
      </Grid>
      {empty && <Alert severity="info">Sorry, there is no result!</Alert>}
      <CardList cardList={cardList} />
    </Grid>
  );
}
