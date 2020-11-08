import React, { useEffect, useState } from "react";
import WeatherByDay from "../weather-by-day/weather-by-day";
import { useLocation } from "react-router-dom";

import "./current-weather.scss";

export const CurrentWeather = () => {
  const locationBrowser = useLocation();
  const searchParams = new URLSearchParams(locationBrowser.search);
  var searchTermFromparam = searchParams.get("term") ?? "";
  var apiUrl = "";

  if (searchTermFromparam !== "") {
    apiUrl =
      "//api.weatherapi.com/v1/forecast.json?key=d399b4c72a3e4a0ba5b102144202710&q=" +
      searchTermFromparam +
      "&days=5";
  } else {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  var options = {
    enableHighAccuracy: true,
    timeout: 0,
    maximumAge: 0,
  };

  function success(pos) {
    var crd = pos.coords;

    apiUrl =
      "//api.weatherapi.com/v1/forecast.json?key=d399b4c72a3e4a0ba5b102144202710&q=" +
      crd.latitude +
      "," +
      crd.longitude +
      "&days=5";  
  }

  function error(err) {
    console.warn(`Error(${err.code}): ${err.message}`);
  }

  const [weather, setWeather] = useState(null);

  var isFirstLoad = true;
  const getWeather = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.error && data.error.code === 1006) {
          setWeather(undefined);
        } else {
          setWeather(data);
          isFirstLoad = false;
        }
      });
  };

  var setIntervalValue = isFirstLoad ? 0 : 100000;
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

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error, options);

    console.log("getCurrentLocation");
  };

  if (!weather) return <div>Loading ...</div>;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="form-row">
              <div className="col-12">
                <button
                  type="button"
                  className="btn btn-light show-current-location-btn"
                  onClick={getCurrentLocation}
                >
                  Show current location
                </button>
              </div>
            </div>
          </div>
        </div>

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
