import React, { useState } from "react";
import "./App.css";
import Nav from './components/Nav';
import Cards from './components/Cards';

const APIKEY = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [cities, setCities] = useState([]);
  function onSearch(city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.main !== undefined) {
          const new_city = {
            min: Math.round(data.main.temp_min),
            max: Math.round(data.main.temp_max),
            img: data.weather[0].icon,
            id: data.id,
            name: data.name,
          };
          if (cities.find((c) => c.id === new_city.id)) {
            alert("La ciudad ya se encuentra en la lista");
          } else {
            setCities((oldCities) => [...oldCities, new_city]);
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  return (
  <div className="App">
  <Nav onSearch={onSearch}/>
  <Cards cities = {cities} onClose={onClose} />
  </div>
  );
}

export default App;
