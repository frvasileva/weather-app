import React, { useEffect, useState } from "react";
import WeatherByDay from "../weather-by-day/weather-by-day";
import { useLocation } from "react-router-dom";

import "./current-weather.scss";

export const CurrentWeather = () => {
  const locationBrowser = useLocation();
  const searchParams = new URLSearchParams(locationBrowser.search);
  var searchTermFromparam = searchParams.get("term") ?? "Sofia";

  var apiUrl = "";

  if (searchTermFromparam !== "") {
    apiUrl =
      "//api.weatherapi.com/v1/forecast.json?key=d399b4c72a3e4a0ba5b102144202710&q=" +
      searchTermFromparam +
      "&days=5";
  }

  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.error && data.error.code === 1006) {
          setWeather(undefined);
        } else {
          setWeather(data);
          console.log("data", data);
        }
      });
  };

  var setIntervalValue = 100000;
  useEffect(() => {
    getWeather();

    const interval = setInterval(() => {
      getWeather();
    }, setIntervalValue);

    return () => clearInterval(interval);
  }, [apiUrl]);

  if (typeof weather === "undefined")
    return (
      <div>
        <div class="alert alert-secondary" role="alert">
          No such location!
        </div>
      </div>
    );

  if (!weather) return <div>Loading ...</div>;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="main-current-weather-info">
              <div className="location">
                {weather.location.name}, {weather.location.country}
              </div>

              <div className="temperature"> {weather.current.temp_c} °C</div>
              <div className="temperature-feels-like">
                Feels like {weather.current.feelslike_c} °C
              </div>
              <img
                src={weather.current.condition.icon}
                alt={weather.current.condition.text}
              ></img>
              <div className="weather-condition-text">
                {weather.current.condition.text}
              </div>
              <div className="last-updated-info">
                Last updated: {weather.current.last_updated}
              </div>
            </div>
          </div>
        </div>
        <WeatherByDay forecastDays={weather.forecast.forecastday} />
      </div>
    </div>
  );
};

export default CurrentWeather;
