import { useState } from "react";
import { Button, Grid, TextField, Box, Alert } from "@mui/material";

export const Search = ({ search }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [alert, setAlert] = useState(false);
  const clickSearch = () => {
    if (keyword === "" && location === "") {
      setAlert(true);
      return false;
    }
    setAlert(false);
    search(keyword, location);
    //setKeyword("");
    //setLocation("");
  };
  return (
    <Box>
      <Grid container item xs={12} sm={12} md={12}>
        {alert && (
          <Alert severity="error">
            Please input keyword or location for your search!
          </Alert>
        )}
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            id="keyword"
            label="Keyword : "
            variant="standard"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            id="location"
            label="Location : "
            variant="standard"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Button
            xs={12}
            md={12}
            style={{ marginTop: "20px" }}
            variant="outlined"
            onClick={clickSearch}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
