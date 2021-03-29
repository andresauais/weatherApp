import {combineReducers} from 'redux';
import weatherInfo from './weather/weatherReducer'

//combine reducers

const reducers = combineReducers({
  WeatherInfo: weatherInfo,
  //here can go more reducers
});

export default reducers;