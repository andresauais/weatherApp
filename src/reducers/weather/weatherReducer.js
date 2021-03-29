export const weatherInfo = (state = {weatherinfo:{}}, action) => {
  if(action.type = "FETCH_WEATHER"){
    state = {...state, weatherinfo: action.payload}
  }
  return state
}

export default weatherInfo