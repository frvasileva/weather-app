import "./App.scss";
import CurrentWeather from "./components/current-weather/current-weather";
import WeatherInfoList from "./weather-info-list/weather-info-list";

function App() {
  return (
    <div className="app-wrapper">
      <header className="App-header"></header>
      <CurrentWeather />
      <WeatherInfoList />
    </div>
  );
}

export default App;
