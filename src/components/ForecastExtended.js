import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ForecastItem from './ForecastItem';
import transformForecast from '../services/transformForecast';
import './styles.css';

export const api_key = 'f99bbd9e4959b513e9bd0d7f7356b38d';
export const url_base_forecast = 'http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component {
    constructor() {
        super();
        this.state = {
            forecastData: null
        };
    }

    updateCity = city => {
        const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                this.setState( { forecastData } );
            }
        );
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState( { forecastData: null });
            this.updateCity(nextProps.city);
        }
    }

    renderProgress() {
        return (
            <>
                <h3>Loading Forecast Extended</h3>
                <CircularProgress size={50}/>
            </>
        );
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map( forecast => {
            return (
                <ForecastItem
                    key={`${forecast.weekDay}${forecast.hour}`}
                    weekDay={forecast.weekDay}
                    hour={forecast.hour}
                    data={forecast.data}
                />
            );
        });
    }
    
    render() {
        const { city } = this.props;
        const { forecastData } = this.state;

        return (
            <div>
                <h2 className='forecast-title'>Extended Forecast for {city}</h2>
                {forecastData ?
                    this.renderForecastItemDays(forecastData) :
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
