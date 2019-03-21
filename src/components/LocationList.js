import React from 'react';

import WeatherLocation from './WeatherLocation';

const LocationList = () => {
    return (
        <div>
            <WeatherLocation city='Bogota,co' />
            <WeatherLocation city='Buenos Aires,ar' />
            <WeatherLocation city='Mexico,mx' />
            <WeatherLocation city='Washington,us' />
        </div>
    );
}

export default LocationList;
