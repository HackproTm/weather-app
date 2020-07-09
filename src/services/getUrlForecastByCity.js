import { api_key, url_base_forecast } from '../constants/apiWeather';

const getUrlForecastByCity = city => {
    return `${url_base_forecast}?q=${city}&appid=${api_key}`;
}

export default getUrlForecastByCity;
