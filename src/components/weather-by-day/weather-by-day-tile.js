import React from "react";
import CurrentWeatherByHour from "../current-weather/current-weather-by-hour";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "./weather-by-day.scss";

export const WeatherByDayTile = (props) => {
  var element = props.element;
  console.log("element", element);

  var chartData = element.hour.map(function (item) {
    return {
      //  x: parseInt(item.time.substr(11, 6)),
      x: item.time.substr(11, 6),
      y: item.temp_c,
      fani: item.temp_c,
      label: item.time.substr(11, 6),
      style: { fontSize: 10 },
      rotation: 34,
      labelAnchorY: item.time.substr(11, 6),
      chance_of_rain: item.chance_of_rain,
      humidity: item.humidity,
      icon: item.condition.icon
    };
  });

  function CustomTooltip({ payload, label, active }) {
    console.log("payload", payload);
    console.log("payload 2", payload.payload);

    if (active) {
      return (
        <div className="custom-tooltip">
          <span className="label">{label} ч. </span>
          <hr />
          <img src={payload[0].payload.icon} alt="weather icon" className="weather-icon" />
          <span className="value">{payload[0].value}°C </span>
          <hr />
          <span className="desc">
            {payload[0].payload.chance_of_rain}% Rain
          </span>
          <span className="desc">{payload[0].payload.humidity}% Humidity</span>
        </div>
      );
    }

    return null;
  }

  if (props.isExpanded)
    return (
      <div>
        <div className="row">
          <div className="col-4 item-wrapper">
            <span className="wi wi-humidity" title="Humidity"></span>
            <span className="item-value"> {element.day.avghumidity} %</span>
            <span className="weather-label-info">Humidity</span>
          </div>

          <div className="col-4 item-wrapper">
            <span className="wi wi-night-showers" title="Showers"></span>
            <span className="item-value">
              {element.day.daily_chance_of_rain} %
            </span>
            <span className="weather-label-info">Rain</span>
          </div>

          <div className="col-4 item-wrapper">
            <span className="wi wi-snowflake-cold" title="Snow"></span>
            <span className="item-value">
              {element.day.daily_chance_of_snow} %
            </span>
            <span className="weather-label-info">Snow</span>
          </div>
        </div>

        <div className="row">
          <div className="col-md">
            <br></br>
            <br></br>
            <LineChart width={500} height={300} data={chartData}>
              <Line type="monotone" dataKey="y" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />{" "}
            </LineChart>
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
