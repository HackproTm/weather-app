import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ForecastItem from './ForecastItem';
import './styles.css';

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

const data = {
    temperature: 15,
    weatherState: 'sun',
    humidity: 10,
    wind: '10 m/s'
};

class ForecastExtended extends Component {
    renderForecastItemDays() {
        return days.map( day => {
            return (<ForecastItem weekDay={day} hour={10} data={data}/>);
        });
    }
    
    render() {
        const { city } = this.props;

        return (
            <div>
                <h2 className='forecast-title'>Extended Forecast for {city}</h2>
                {this.renderForecastItemDays()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
};

export default ForecastExtended;
