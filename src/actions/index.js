import getUrlForecastByCity from '../services/getUrlForecastByCity';
import getUrlWeatherByCity from '../services/getUrlWeatherByCity';
import transformForecast from '../services/transformForecast';
import transformWeather from '../services/transformWeather';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const getWeatherCity = payload => ({
  type: GET_WEATHER_CITY,
  payload
});

const setCity = payload => ({
  type: SET_CITY,
  payload
});

const setForecastData = payload => ({
  type: SET_FORECAST_DATA,
  payload
});

const setWeatherCity = payload => ({
  type: SET_WEATHER_CITY,
  payload
});

export const setSelectedCity = payload => {
  return dispatch => {
    const api_forecast = getUrlForecastByCity(payload);

    // Activar en el estado un indicador de busqueda de datos.
    dispatch(setCity(payload));

    return fetch(api_forecast).then(
      data => (data.json())
    ).then(
      weather_data => {
        const forecastData = transformForecast(weather_data);
        // Modificar el estado con el resultado de la Promise
        dispatch(setForecastData({ city: payload, forecastData }));
      }
    );
  };
};

export const setWeather = payload => {

  return dispatch => {
    payload.forEach(city => {
      const api_weather = getUrlWeatherByCity(city);

      dispatch(getWeatherCity(city));

      fetch(api_weather).then(
        data => { return data.json(); }
      ).then(weather_data  => {
        const weather = transformWeather(weather_data );
        dispatch(setWeatherCity({ city, weather }));
      });
    })
  }
};
