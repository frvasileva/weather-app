import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import CurrentWeather from "../current-weather/current-weather";
import "./search-by-location.scss";

export const SearchByLocation = () => {
  const locationBrowser = useLocation();
  const history = useHistory();

  const searchParams = new URLSearchParams(locationBrowser.search);
  var searchTerm = searchParams.get("term") ?? "";

  const [location, setLocation] = useState(searchTerm);
  const [isFormValid, setFormIsValid] = useState(true);

  const changeLocation = (e) => {
    setLocation(e.target.value);
    if (e.target.value !== undefined && e.target.value.trim() !== "")
      setFormIsValid(true);
  };

  const searchByLocation = (e) => {
    e.preventDefault();
    if (location === undefined || location === "") {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
      history.push(`?term=${location}`);
    }
  };

  return (
    <div>
      <div className="search-by-location-wrapper">
        <form onSubmit={searchByLocation}>
          <div className="form-row">
            <div className="col-8">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search location"
                value={location}
                onChange={changeLocation}
              />
              {!isFormValid && <span>Choose location</span>}
            </div>
            <div className="col-4">
              <button type="submit" className="btn btn-light btn-block btn-lg">
                Seach
              </button>
            </div>
          </div>
        </form>
      </div>
      <CurrentWeather />
    </div>
  );
};

export default SearchByLocation;
