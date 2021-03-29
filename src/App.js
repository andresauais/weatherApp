import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

//import actions
import {fetchWeather} from './actions/fetchWeather'

//import the provider
import {Provider} from "react-redux";

function App() {
  //set city
  const [city, setCity] = useState("");

  const weatherSelector = useSelector((state)=> state.WeatherInfo)
  const dispatch = useDispatch();
  const getWeatherInfoAction = (city) => dispatch(fetchWeather(city));

  const weather = weatherSelector.weatherinfo;
  let details = "";

  useEffect(()=>{
    getWeatherInfoAction("");
  },[])

  const getWeatherInfo = (e) =>{
    e.preventDefault();
    if(city === ""){
      getWeatherInfoAction("");
    }
    else{
      getWeatherInfoAction(city);
    }
  }
  
  
  if(weather && weather.hasOwnProperty("location")){
    details = <div>
                <h4>Weather Details</h4>
                <p>
                  {weather.location.name},
                  <span> {weather.location.country}</span>
                </p>
                <p>{weather.current.temperature}ºC</p>
                <img src={weather.current.weather_icons} />
                <p>{weather.current.weather_descriptions}</p>
              </div>
  }
  else{
    details= <p>You need to type a city</p>
  }

  return (
    <React.Fragment>
      <div className="App">
        <header>
          <h1>React-Redux Weather App</h1>
        </header>
        <main>
          <form onSubmit={getWeatherInfo}>
            <div>
              <input
                type="text" name="name" placeholder="City"
                onChange={e=>setCity(e.target.value)}
              />
            </div>
            <input type="submit" value="Check Weather" />
          </form>
        </main>
        <div>
          {details}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

