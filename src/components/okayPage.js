import React from "react";
import { Typography, Stack } from "@mui/material";
import { styled } from "@mui/system";
import clearDay from "../backgrounds/clear-day.jpg";
import cloudyDay from "../backgrounds/cloudy-day.jpg";
import hazeDay from "../backgrounds/haze-day.jpg";
import rainDay from "../backgrounds/rain-day.jpg";
import smogDay from "../backgrounds/smog-day.jpg";
import snowDay from "../backgrounds/snow-day.jpg";
import stormyDay from "../backgrounds/stormy-day.jpg";
import tempDefaultDay from "../backgrounds/snow-night.jpg";

const AClearDay = styled("div")({
  backgroundImage: `url(${clearDay})`,
  backgroundSize: "cover",
  height: "100vh",
  width: "100vw",
});

const ACloudyDay = styled("div")({
  backgroundImage: `url(${cloudyDay})`,
  backgroundSize: "cover",
  height: "100vh",
  width: "100vw",
});

const AHazeDay = styled("div")({
  backgroundImage: `url(${hazeDay})`,
  backgroundSize: "cover",
  height: "100vh",
  width: "100vw",
});

const ARainDay = styled("div")({
  backgroundImage: `url(${rainDay})`,
  backgroundSize: "cover",
  height: "100vh",
  width: "100vw",
});
const ASmogDay = styled("div")({
  backgroundImage: `url(${smogDay})`,
  backgroundSize: "cover",
  height: "100vh",
  width: "100vw",
});

const ASnowDay = styled("div")({
  backgroundImage: `url(${snowDay})`,
  backgroundSize: "cover",
  height: "100vh",
  width: "100vw",
});

const AStormyDay = styled("div")({
  backgroundImage: `url(${stormyDay})`,
  backgroundSize: "cover",
  height: "100vh",
  width: "100vw",
});

const ASnowNight = styled("div")({
  backgroundImage: `url(${tempDefaultDay})`,
  backgroundSize: "cover",
  height: "100vh",
  width: "100vw",
});

function OkayPage({
  city,
  temp,
  minTemp,
  maxTemp,
  description,
  tempFeel,
  windspeed,
  humidity,
}) {
  const convertedTemp = `${Math.floor((temp - 273.15) * (9 / 5) + 32)}°F`;
  const convertedMinTemp = `${Math.floor((minTemp - 273.15) * (9 / 5) + 32)}°F`;
  const convertedMaxTemp = `${Math.floor(
    (maxTemp - 273.15) * (9 / 5) + 32
  )} °F`;
  const convertedTempFeel = `${Math.floor(
    (tempFeel - 273.15) * (9 / 5) + 32
  )}°F`;

  const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);

  if (description === "Clear") {
    return (
      <AClearDay>
        <div className="weather">
          <div className="location">
            <Typography variant="h3" component="h1">
              {capitalizedCity}
            </Typography>
          </div>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <div className="temperature">
              <Typography variant="h2">{convertedTemp}</Typography>
            </div>
            <div className="description">
              <Typography variant="h5">{description}</Typography>
            </div>
          </Stack>
          <div className="temp-feel">
            <Typography variant="h4">
              Feels Like: {convertedTempFeel}
            </Typography>
          </div>
          <Stack spacing={2} direction="row" justifyContent="center">
            <div className="maxtemp">
              <Typography variant="h5">Max: {convertedMaxTemp}</Typography>
            </div>
            <div className="mintemp">
              <Typography variant="h5">Min: {convertedMinTemp}</Typography>
            </div>
          </Stack>
          <div className="windspeed">
            <Typography variant="h5">Windspeed: {windspeed} mph</Typography>
          </div>
          <div className="humidity">
            <Typography variant="h5">Humidity: {humidity}%</Typography>
          </div>
        </div>
      </AClearDay>
    );
  } else if (description === "Clouds") {
    return (
      <ACloudyDay>
        <div className="weather">
          <div className="location">
            <Typography variant="h3" component="h1">
              {capitalizedCity}
            </Typography>
          </div>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <div className="temperature">
              <Typography variant="h2">{convertedTemp}</Typography>
            </div>
            <div className="description">
              <Typography variant="h5">{description}</Typography>
            </div>
          </Stack>
          <div className="temp-feel">
            <Typography variant="h4">
              Feels Like: {convertedTempFeel}
            </Typography>
          </div>
          <Stack spacing={2} direction="row" justifyContent="center">
            <div className="maxtemp">
              <Typography variant="h5">Max: {convertedMaxTemp}</Typography>
            </div>
            <div className="mintemp">
              <Typography variant="h5">Min: {convertedMinTemp}</Typography>
            </div>
          </Stack>
          <div className="windspeed">
            <Typography variant="h5">Windspeed: {windspeed} mph</Typography>
          </div>
          <div className="humidity">
            <Typography variant="h5">Humidity: {humidity}%</Typography>
          </div>
        </div>
      </ACloudyDay>
    );
  } else if (description === "Haze") {
    return (
      <AHazeDay>
        <div className="weather">
          <div className="location">
            <Typography variant="h3" component="h1">
              {capitalizedCity}
            </Typography>
          </div>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <div className="temperature">
              <Typography variant="h2">{convertedTemp}</Typography>
            </div>
            <div className="description">
              <Typography variant="h5">{description}</Typography>
            </div>
          </Stack>
          <div className="temp-feel">
            <Typography variant="h4">
              Feels Like: {convertedTempFeel}
            </Typography>
          </div>
          <Stack spacing={2} direction="row" justifyContent="center">
            <div className="maxtemp">
              <Typography variant="h5">Max: {convertedMaxTemp}</Typography>
            </div>
            <div className="mintemp">
              <Typography variant="h5">Min: {convertedMinTemp}</Typography>
            </div>
          </Stack>
          <div className="windspeed">
            <Typography variant="h5">Windspeed: {windspeed} mph</Typography>
          </div>
          <div className="humidity">
            <Typography variant="h5">Humidity: {humidity}%</Typography>
          </div>
        </div>
      </AHazeDay>
    );
  } else if (description === "Rain") {
    return (
      <ARainDay>
        <div className="weather">
          <div className="location">
            <Typography variant="h3" component="h1">
              {capitalizedCity}
            </Typography>
          </div>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <div className="temperature">
              <Typography variant="h2">{convertedTemp}</Typography>
            </div>
            <div className="description">
              <Typography variant="h5">{description}</Typography>
            </div>
          </Stack>
          <div className="temp-feel">
            <Typography variant="h4">
              Feels Like: {convertedTempFeel}
            </Typography>
          </div>
          <Stack spacing={2} direction="row" justifyContent="center">
            <div className="maxtemp">
              <Typography variant="h5">Max: {convertedMaxTemp}</Typography>
            </div>
            <div className="mintemp">
              <Typography variant="h5">Min: {convertedMinTemp}</Typography>
            </div>
          </Stack>
          <div className="windspeed">
            <Typography variant="h5">Windspeed: {windspeed} mph</Typography>
          </div>
          <div className="humidity">
            <Typography variant="h5">Humidity: {humidity}%</Typography>
          </div>
        </div>
      </ARainDay>
    );
  } else if (description === "Smoke") {
    return (
      <ASmogDay>
        <div className="weather">
          <div className="location">
            <Typography variant="h3" component="h1">
              {capitalizedCity}
            </Typography>
          </div>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <div className="temperature">
              <Typography variant="h2">{convertedTemp}</Typography>
            </div>
            <div className="description">
              <Typography variant="h5">{description}</Typography>
            </div>
          </Stack>
          <div className="temp-feel">
            <Typography variant="h4">
              Feels Like: {convertedTempFeel}
            </Typography>
          </div>
          <Stack spacing={2} direction="row" justifyContent="center">
            <div className="maxtemp">
              <Typography variant="h5">Max: {convertedMaxTemp}</Typography>
            </div>
            <div className="mintemp">
              <Typography variant="h5">Min: {convertedMinTemp}</Typography>
            </div>
          </Stack>
          <div className="windspeed">
            <Typography variant="h5">Windspeed: {windspeed} mph</Typography>
          </div>
          <div className="humidity">
            <Typography variant="h5">Humidity: {humidity}%</Typography>
          </div>
        </div>
      </ASmogDay>
    );
  } else if (description === "Snow") {
    return (
      <ASnowDay>
        <div className="weather">
          <div className="location">
            <Typography variant="h3" component="h1">
              {capitalizedCity}
            </Typography>
          </div>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <div className="temperature">
              <Typography variant="h2">{convertedTemp}</Typography>
            </div>
            <div className="description">
              <Typography variant="h5">{description}</Typography>
            </div>
          </Stack>
          <div className="temp-feel">
            <Typography variant="h4">
              Feels Like: {convertedTempFeel}
            </Typography>
          </div>
          <Stack spacing={2} direction="row" justifyContent="center">
            <div className="maxtemp">
              <Typography variant="h5">Max: {convertedMaxTemp}</Typography>
            </div>
            <div className="mintemp">
              <Typography variant="h5">Min: {convertedMinTemp}</Typography>
            </div>
          </Stack>
          <div className="windspeed">
            <Typography variant="h5">Windspeed: {windspeed} mph</Typography>
          </div>
          <div className="humidity">
            <Typography variant="h5">Humidity: {humidity}%</Typography>
          </div>
        </div>
      </ASnowDay>
    );
  } else if (description === "Thunderstorm") {
    return (
      <AStormyDay>
        <div className="weather">
          <div className="location">
            <Typography variant="h3" component="h1">
              {capitalizedCity}
            </Typography>
          </div>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <div className="temperature">
              <Typography variant="h2">{convertedTemp}</Typography>
            </div>
            <div className="description">
              <Typography variant="h5">{description}</Typography>
            </div>
          </Stack>
          <div className="temp-feel">
            <Typography variant="h4">
              Feels Like: {convertedTempFeel}
            </Typography>
          </div>
          <Stack spacing={2} direction="row" justifyContent="center">
            <div className="maxtemp">
              <Typography variant="h5">Max: {convertedMaxTemp}</Typography>
            </div>
            <div className="mintemp">
              <Typography variant="h5">Min: {convertedMinTemp}</Typography>
            </div>
          </Stack>
          <div className="windspeed">
            <Typography variant="h5">Windspeed: {windspeed} mph</Typography>
          </div>
          <div className="humidity">
            <Typography variant="h5">Humidity: {humidity}%</Typography>
          </div>
        </div>
      </AStormyDay>
    );
  } else {
    return (
      <ASnowNight>
        <div className="weather">
          <div className="location">
            <Typography variant="h3" component="h1">
              {capitalizedCity}
            </Typography>
          </div>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <div className="temperature">
              <Typography variant="h2">{convertedTemp}</Typography>
            </div>
            <div className="description">
              <Typography variant="h5">{description}</Typography>
            </div>
          </Stack>
          <div className="temp-feel">
            <Typography variant="h4">
              Feels Like: {convertedTempFeel}
            </Typography>
          </div>
          <Stack spacing={2} direction="row" justifyContent="center">
            <div className="maxtemp">
              <Typography variant="h5">Max: {convertedMaxTemp}</Typography>
            </div>
            <div className="mintemp">
              <Typography variant="h5">Min: {convertedMinTemp}</Typography>
            </div>
          </Stack>
          <div className="windspeed">
            <Typography variant="h5">Windspeed: {windspeed} mph</Typography>
          </div>
          <div className="humidity">
            <Typography variant="h5">Humidity: {humidity}%</Typography>
          </div>
        </div>
      </ASnowNight>
    );
  }
}

export default OkayPage;
