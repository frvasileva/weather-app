import React from "react";
import CurrentWeatherByHour from "../current-weather/current-weather-by-hour";

import "./weather-by-day.scss";

export const WeatherByDayTile = (props) => {
  var element = props.element;

  if (props.isExpanded)
    return (
      <div>
        <div className="row">
          <div className="col-4 item-wrapper">
            <span className="wi wi-humidity" title="Humidity"></span>
            {element.day.avghumidity} %
            <span className="weather-label-info">Humidity</span>
          </div>

          <div className="col-4 item-wrapper">
            <span className="wi wi-night-showers" title="Showers"></span>
            {element.day.daily_chance_of_rain} %
            <span className="weather-label-info">Rain</span>
          </div>

          <div className="col-4 item-wrapper">
            <span className="wi wi-snowflake-cold" title="Snow"></span>
            {element.day.daily_chance_of_snow} %
            <span className="weather-label-info">Snow</span>
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
