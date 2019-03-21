import React from 'react';
import PropTypes from 'prop-types';

import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = (props) => {
    const { cities, onSelectedLocation } = props;

    const handleWeatherLocationClick = city => {
        console.log('handleWeatherLocationClick');
        onSelectedLocation(city);
    }

    const getWeatherLocations = (cities) => {
        return (
            cities.map( city =>
                <WeatherLocation key={city}
                                 city={city}
                                 onWeatherLocationClick={() => handleWeatherLocationClick(city)}
                />
            )
        );
    }

    return (
        <div className='locationList'>
            {getWeatherLocations(cities)}
        </div>
    );
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func
}

export default LocationList;
