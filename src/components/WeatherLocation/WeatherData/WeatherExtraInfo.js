import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const WeatherExtraInfo = (props) => {
    const { humidity, wind } = props;

    return (
        <div className='weatherExtraInfoCont'>
            <span className='extraInfoText'>{`Humidity: ${humidity}%`}</span>
            <span className='extraInfoText'>{`Wind: ${wind}`}</span>
        </div>
    );
};

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
}

export default WeatherExtraInfo;
