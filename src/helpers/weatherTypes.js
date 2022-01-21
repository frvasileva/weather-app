var WeatherType = function (weather) {
  console.log("weather", weather);
  if (!weather) {
    return "n/a";
  }

  weather = weather.toLowerCase();

  if (weather.includes("rain")) return "rain";
  else if (weather.includes("sun")) {
    return "sun";
  } else if (weather.includes("wind")) {
    return "wind";
  } else if (weather.includes("fog")) {
    return "fog";
  } else if (weather.includes("snow")) {
    return "snow";
  } else if (weather.includes("wind")) {
    return "wind";
  } else if (weather.includes("sleet")) {
    return "sleet";
  } else if (weather.includes("cloud") || weather.includes("overcast")) {
    return "cloud";
  } else {
    return "n/a";
  }
};

export default WeatherType;
