import React from "react";
import "./temperature-by-hours.scss";

export const CurrentWeatherByHour = (props) => {
  var hours = props.hours;

  return (
    <div>
      <div className="row">
        <div className="col-md">
          <ul className="temperature-by-hour-list-wrapper">
            {hours.map((element) => (
              <li className="hour-item" key={element.time}>
                <div className="row">
                  <div className="col-md-4">
                    <div className="item-wrapper">
                      <p> {element.time.split(" ")[1]}</p>
                    </div>
                  </div>
                  <div className="col-md-1">
                    <img
                      className="icon weather-icon"
                      src={element.condition.icon}
                      alt={element.condition.text}
                    />
                  </div>
                  <div className="col-md-3">
                    <p className="condition-text-small">
                      {element.condition.text}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="temperature-value">
                      <strong>{element.temp_c.toFixed()} °C </strong>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherByHour;
