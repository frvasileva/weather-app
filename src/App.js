import "./App.scss";
import CurrentWeather from "./components/current-weather/current-weather";
import WeatherByDay from "./components/weather-by-day/weather-by-day";
import WeatherInfoList from "./weather-info-list/weather-info-list";

function App() {
  return (
    <div className="app-wrapper">
      <header className="App-header"></header>
      <CurrentWeather />
      <WeatherByDay />
      <WeatherInfoList />
    </div>
  );
}

export default App;
