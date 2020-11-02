import React from "react";

export const CurrentWeatherByHour = (props) => {
  var hours = props.forecastHours.forecastday[0].hour;

  return (
    <div>
      <div className="row">
        <div className="col-md">
          <ul className="list-group-flush">
            {hours.map((element) => (
              <li className="list-group-item" key={element.time_epoch}>
                <div className="row">
                  <div className="col-8">
                    {" "}
                    {element.time.split(" ")[1]} -{" "}
                    <strong>{element.temp_c} °C </strong>
                  </div>
                  <div className="col-4">
                    <img
                      className="icon"
                      src={element.condition.icon}
                      alt={element.condition.text}
                    />
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
