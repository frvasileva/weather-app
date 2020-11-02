import React, { useState } from "react";
import CurrentWeather from "../current-weather/current-weather";
import "./search-by-location.scss";

export const SearchByLocation = () => {
  const [location, setLocation] = useState("Plovdiv");
  const [location2, setLocation2] = useState("Plovdiv");
  const [isFormValid, setFormIsValid] = useState(true);

  const changeLocation = (e) => {
    setLocation(e.target.value);
    if (e.target.value !== undefined && e.target.value.trim() != "")
      setFormIsValid(true);
  };

  const searchByLocation = (e) => {
    e.preventDefault();
    if (location === undefined || location === "") {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
      setLocation2(location);
    }
    console.log(">>>>>> form submitted");
  };

  console.log(location);
  return (
    <div>
      <div className="search-by-location-wrapper">
        <form onSubmit={searchByLocation}>
          <div className="form-row">
            <div className="col-9">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search location"
                value={location}
                onChange={changeLocation}
              />
              {!isFormValid && <span>Choose location</span>}
            </div>
            <div className="col-3">
              <button type="submit" className="btn btn-light btn-block btn-lg">
                Seach
              </button>
            </div>
          </div>
        </form>
      </div>
      <CurrentWeather location={location2} />
    </div>
  );
};

export default SearchByLocation;
