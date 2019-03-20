import React from 'react';

import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

import './styles.css';

const WeatherData = (props) => {
    const { data: { temperature, weatherState, humidity, wind } } = props;

    return (
        <div className='weatherDataCont'>
            <WeatherTemperature temperature={temperature}
                                weatherState={weatherState}>
            </WeatherTemperature>
            <WeatherExtraInfo humidity={humidity}
                              wind={wind}>
            </WeatherExtraInfo>
        </div>
    );
};

export default WeatherData;
