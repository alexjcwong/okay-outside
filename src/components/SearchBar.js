import React from "react";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ citySearch, setSearchedCity, searchedCity, cityError }) {
  return (
    <div>
      <form onSubmit={citySearch}>
        <TextField
          id="search-bar"
          className="text"
          placeholder="Search by city name"
          value={searchedCity}
          onChange={(event) => {
            setSearchedCity(event.target.value);
          }}
          variant="outlined"
          error={cityError}
        />
        <IconButton type="submit" aria-label="search" justifycontent="center">
          <SearchIcon />
        </IconButton>
      </form>
    </div>
  );
}

export default SearchBar;
