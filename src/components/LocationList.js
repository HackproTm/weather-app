import React from 'react';
import PropTypes from 'prop-types';

import WeatherLocation from './WeatherLocation';

const getWeatherLocations = (cities) => {
    return (
        cities.map( city => <WeatherLocation key={city} city={city} />)
    );
}

const LocationList = (props) => {
    const { cities } = props;

    return (
        <div>
            {getWeatherLocations(cities)}
        </div>
    );
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired
}

export default LocationList;
