import React from "react";
import "./temperature-by-hours.scss";

export const CurrentWeatherByHour = (props) => {
  var hours = props.hours;
  console.log("hours in component", hours);

  return (
    <div>
      <div className="row">
        <div className="col-md">
          <ul className="temperature-by-hour-list-wrapper">
            {hours.map((element) => (
              <li className="hour-item" key={element.time}>
                <div className="row">
                  <div className="col-md">
                    <div className="item-wrapper">
                      <p> {element.time.split(" ")[1]}</p>
                      <img
                        className="icon weather-icon"
                        src={element.condition.icon}
                        alt={element.condition.text}
                      />
                      <p className="condition-text-small">{element.condition.text}</p>
                      <p>
                        <strong>{element.temp_c} °C </strong>
                      </p>
                    </div>
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
