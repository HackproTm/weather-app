import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import PropTypes from 'prop-types';

import Location from './Location';
import WeatherData from './WeatherData';

import './styles.css'; 

// handleUpdateClick = () => {
//     const api_weather = getUrlWeatherByCity(this.state.city);

//     fetch(api_weather).then(resolve => {
//         return resolve.json();
//     }).then(data => {
//         const newData = transformWeather(data);
//         this.setState({
//            data: newData
//         });
//     });
// }

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
  <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
    <Location city={city} />
    {data ?
      <WeatherData data={data} /> :
      <CircularProgress size={50}/>
    }
  </div>
);

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
};

export default WeatherLocation;
