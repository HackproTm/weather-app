import React from 'react';
import PropTypes from 'prop-types';

import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = (props) => {
  const { cities, onSelectedLocation } = props;

  const handleWeatherLocationClick = city => {
    onSelectedLocation(city);
  };

  const getWeatherLocations = (cities) => {
    cities.map( city =>
      <WeatherLocation
        key={city.key}
        city={city.name}
        onWeatherLocationClick={() => handleWeatherLocationClick(city.name)}
        data={city.data}
      />
    );
  };

  return (
    <div className='locationList'>
      {getWeatherLocations(cities)}
    </div>
  );
}

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func
};

export default LocationList;
