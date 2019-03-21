import React from 'react';
import PropTypes from 'prop-types';

import WeatherData from '../WeatherLocation/WeatherData';

const ForecastItem = (props) => {
    const { weekDay, hour, data } = props;

    return (
        <div>
            <div>{weekDay} Hour {hour} hs</div>
            <WeatherData data={data} />
        </div>
    );
};

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
};

export default ForecastItem;
