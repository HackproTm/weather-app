import React from 'react';

import WeatherLocation from './WeatherLocation';

const LocationList = () => {
    return (
        <div>
            <WeatherLocation city='Bogota,co' />
            <WeatherLocation city='Buenos Aires,ar' />
            <WeatherLocation city='Mexico,mx' />
        </div>
    );
}

export default LocationList;
