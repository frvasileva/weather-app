import React from "react";

export const WeatherInfoTile = (props) => {
  var item = props.item;

  return (
    <div>
      <div className="card">
        <img className="card-img-top" src="https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png" alt={props.item.date} />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">{item.date}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfoTile;
