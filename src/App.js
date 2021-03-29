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

  useEffect(()=>{
    getWeatherInfoAction("");
  },[])

  const getWeatherInfo = (e) =>{
    e.preventDefault();
    if(city=== ""){
      console.log("no city")
    }
    else{
      getWeatherInfoAction(city);
      console.log(weatherSelector);
    }
  }

  let details = "";
  if(weatherSelector.weatherinfo && weatherSelector.weatherinfo.hasOwnProperty("location")){
    details = <div>
                <h4>Weather Details</h4>
                <p>
                  {weatherSelector.weatherinfo.location.name},
                  <span> {weatherSelector.weatherinfo.location.country}</span>
                </p>
                <p>{weatherSelector.weatherinfo.current.temperature}ºC</p>
                <img src={weatherSelector.weatherinfo.current.weather_icons} />
                <p>{weatherSelector.weatherinfo.current.weather_descriptions}</p>

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

