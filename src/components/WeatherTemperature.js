import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
    sunny: 'day-sanny',
    fog: 'day-fog'
}

const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];

    if (icon) {
        return (<WeatherIcons name={icon} size='2x' />);
    } else {
        return (<WeatherIcons name={'day-sunny'} size='2x' />);
    }
};

const WeatherTemperature = (props) => {
    const { temperature, weatherState } = props;

    return (
        <div>
            { getWeatherIcon(weatherState) }
            <span>{`${temperature}°C`}</span>
        </div>
    );
};

export default WeatherTemperature;
