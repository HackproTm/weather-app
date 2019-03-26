import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import ForecastItem from './ForecastItem';
import transformForecast from '../services/transformForecast';
import './styles.css';
/*
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
*/

export const api_key = 'f99bbd9e4959b513e9bd0d7f7356b38d';
export const url_base_forecast = 'http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component {
    constructor() {
        super();
        this.state = {
            forecastData: null
        };
    }

    componentDidMount() {
        const url_forecast = `${url_base_forecast}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                this.setState( { forecastData } );
            }
        );
    }

    renderProgress() {
        return <h3>Loading Forecast Extended</h3>;
    }

    renderForecastItemDays() {
        return 'Render Items';
        // return days.map( day => {
        //    return (<ForecastItem weekDay={day} hour={10} data={data}/>);
        //});
    }
    
    render() {
        const { city } = this.props;
        const { forecastData } = this.state;

        return (
            <div>
                <h2 className='forecast-title'>Extended Forecast for {city}</h2>
                {forecastData ?
                    this.renderForecastItemDays() :
                    this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
};

export default ForecastExtended;
