import React, { useState, useEffect } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import OkayPage from "./components/okayPage";

function App() {
  const [city, setCity] = useState("New York");
  const [cityError, setCityError] = useState(false);
  const [searchedCity, setSearchedCity] = useState("");
  const [temp, setTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [description, setDescription] = useState("");
  const [tempFeel, setTempFeel] = useState("");
  const [windspeed, setWindspeed] = useState("");
  const [humidity, setHumidity] = useState("");

  const citySearch = (event) => {
    event.preventDefault();
    setCityError(false);

    if (searchedCity === "") {
      setCityError(true);
    } else if (searchedCity) {
      setCity(searchedCity);
    }
  };

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_ID}`;

  const getWeather = async () => {
    try {
      const res = await fetch(url);
      const cityWeatherObj = await res.json();
      const temp = cityWeatherObj.main.temp;
      const minTemp = cityWeatherObj.main.temp_min;
      const maxTemp = cityWeatherObj.main.temp_max;

      const description = cityWeatherObj.weather[0].main;
      const tempFeel = cityWeatherObj.main.feels_like;
      const windspeed = cityWeatherObj.wind.speed;
      const humidity = cityWeatherObj.main.humidity;

      setTemp(temp);
      setMinTemp(minTemp);
      setMaxTemp(maxTemp);
      setDescription(description);
      setTempFeel(tempFeel);
      setWindspeed(windspeed);
      setHumidity(humidity);
      console.log(cityWeatherObj);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWeather();
  });

  return (
    <div className="App">
      <SearchBar
        cityError={cityError}
        searchedCity={searchedCity}
        setSearchedCity={setSearchedCity}
        citySearch={citySearch}
      />
      <OkayPage
        city={city}
        searchedCity={searchedCity}
        temp={temp}
        minTemp={minTemp}
        maxTemp={maxTemp}
        description={description}
        tempFeel={tempFeel}
        windspeed={windspeed}
        humidity={humidity}
      />
    </div>
  );
}

export default App;
