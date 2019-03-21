import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';

import { CLOUD, DRIZZLE, RAIN, SNOW, SUN, THUNDER } from '../../../constants/weathers';

import './styles.css';

const icons = {
    [CLOUD]: 'cloud',
    [DRIZZLE]: 'day-showers',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [SUN]: 'day-sunny',
    [THUNDER]: 'day-thunderstorm'
}

const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];

    const sizeIcon = '4x'

    if (icon) {
        return (<WeatherIcons className='wicon' name={icon} size={sizeIcon} />);
    } else {
        return (<WeatherIcons className='wicon' name={'day-sunny'} size={sizeIcon} />);
    }
};

const WeatherTemperature = (props) => {
    const { temperature, weatherState } = props;

    return (
        <div className='weatherTemperatureCont'>
            { getWeatherIcon(weatherState) }
            <span className='temperature'>{`${temperature}`}</span>
            <span className='temperatureType'>{'°C'}</span>
        </div>
    );
};

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
