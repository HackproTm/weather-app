import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import getUrlWeatherByCity from '../../services/getUrlWeatherByCity'
import Location from './Location';
import transformWeather from '../../services/transformWeather';
import WeatherData from './WeatherData';

import './styles.css'; 

class WeatherLocation extends Component {
    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city: city,
            data: null
        };
    }

    componentDidMount() {
        this.handleUpdateClick();    
    }

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city)

        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newData = transformWeather(data);
            this.setState({
               data: newData
            });
        });
    }

    render() {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;

        return (
            <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
                <Location city={city} />
                {data ?
                    <WeatherData data={data} /> :
                    <CircularProgress size={50}/>
                }
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation;
