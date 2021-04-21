import "./App.css";
import React, { useState, useEffect } from "react";
import Slider from "./components/Slider";
import Card from "./components/Card.js";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const [results, setResults] = useState([]);
  const [state, setState] = useState({ tempValue: 5, humidityValue: 30 });

  const fetchForecast = () => {
    /*  const cityName = "Paris";
    const apiId = "";
    const nbDays = "7";
    const endpoint =
      "https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
      cityName +
      "&cnt=" +
      nbDays +
      "&appid=" +
      apiId; */
    const endpoint = "./daily.json";
    fetch(endpoint)
      .then((response) => response.json())
      .then((result) => {
        const newList = result.list.map((element) => {
          element.dt = new Date(element.dt * 1000).toLocaleDateString("en-GB", {
            weekday: "short",
            day: "numeric",
            month: "long",
          });
          element.temp.min = Math.floor(element.temp.min - 273.15);
          return element;
        });
        setResults(newList);
      });
  };

  useEffect(() => {
    fetchForecast();
  }, []);

  const handleChange = (name, value) => {
    setState({ ...state, [name]: value });
  };

  return (
    <div className="App">
      <h1>Weather forecast</h1>
      <h2>Next 7 days</h2>
      <div className="Sliders">
        <Slider
          onChange={handleChange}
          value={state.tempValue}
          name="tempValue"
          maxValue="30"
          title="min temp"
          unit="°c"
        />
        <Slider
          onChange={handleChange}
          value={state.humidityValue}
          name="humidityValue"
          maxValue="80"
          title="humidity"
          unit="%"
        />
      </div>

      <ul>
        <TransitionGroup>
          {results.map((element, index) => {
            if (
              element.temp.min > state.tempValue &&
              element.humidity > state.humidityValue
            ) {
              return (
                <CSSTransition timeout={350} classNames="card" key={index}>
                  <li key={index}>
                    <Card
                      date={element.dt}
                      minTemp={element.temp.min}
                      humidity={element.humidity}
                      icon={element.weather[0].icon}
                    />
                  </li>
                </CSSTransition>
              );
            }
            return "";
          })}
        </TransitionGroup>
      </ul>
    </div>
  );
}

export default App;
