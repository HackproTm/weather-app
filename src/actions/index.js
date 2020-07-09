import transformForecast from '../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER = 'SET_WEATHER';

const setCity = payload => ({
  type: SET_CITY,
  payload
});

const setForecastData = payload => ({
  type: SET_FORECAST_DATA,
  payload
});

const api_key = 'f99bbd9e4959b513e9bd0d7f7356b38d';
const url_base_forecast = 'http://api.openweathermap.org/data/2.5/forecast';

export const setSelectedCity = payload => {
  return dispatch => {
    const url_forecast = `${url_base_forecast}?q=${payload}&appid=${api_key}`;

    // Activar en el estado un indicador de busqueda de datos.
    dispatch(setCity(payload));

    return fetch(url_forecast).then(
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

  const api_weather = getUrlWeatherByCity(this.state.city);

  fetch(api_weather).then(resolve => {
    return resolve.json();
  }).then(data => {
    const newData = transformWeather(data);
    this.setState({
    data: newData
  });
  });
};
