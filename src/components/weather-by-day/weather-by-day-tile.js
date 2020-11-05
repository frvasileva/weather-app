import React from "react";
import CurrentWeatherByHour from "../current-weather/current-weather-by-hour";

import "./weather-by-day.scss";

export const WeatherByDayTile = (props) => {
  var element = props.element;
  console.log("element in by day", element);
  console.log("element in by day", element.hour);

  if (props.isExpanded)
    return (
      <div>
        <div className="row">
          <div className="col-4 item-wrapper">
            <span className="wi wi-humidity" title="Humidity"></span>
            {element.day.avghumidity} %
          </div>

          <div className="col-4 item-wrapper">
            <span className="wi wi-night-showers" title="Humidity"></span>
            {element.day.daily_chance_of_rain} %
          </div>

          <div className="col-4 item-wrapper">
            <span className="wi wi-snowflake-cold" title="Humidity"></span>
            {element.day.daily_chance_of_snow} %
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <CurrentWeatherByHour hours={element.hour} />
          </div>
        </div>
      </div>
    );
  else return <div></div>;
};

export default WeatherByDayTile;
