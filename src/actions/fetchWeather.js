export function fetchWeather(city){
  return function(dispatch){
    fetch(`http://api.weatherstack.com/current?access_key=8babf203409fd6dcdb2594e114500888&query=${city}`)
    .then(res =>{
      return res.json();
    })
    .then(JSONres =>{
      //dispatch action
      dispatch({type:"FETCH_WEATHER",
      payload: JSONres});
    }).catch(err=>{
      console.log(err)
    })
  }
}