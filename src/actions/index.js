export const SET_CITY = 'SET_CITY';

export const setCity = payload => ({
  type: SET_CITY,
  payload
});

export const api_key = 'f99bbd9e4959b513e9bd0d7f7356b38d';
export const url_base_forecast = 'http://api.openweathermap.org/data/2.5/forecast';

export const fetchForecast = payload => {
  return dispatch => {
    const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}`;

    // Activar en el estado un indicador de busqueda de datos.

    fetch(url_forecast).then(
        data => (data.json())
    ).then(
        weather_data => {
            const forecastData = transformForecast(weather_data);
            // Modificar el estado con el resultado de la Promise

        }
    );

    return;
  };
};
