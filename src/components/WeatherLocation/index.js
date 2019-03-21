import React, { Component } from 'react';

import { api_weather } from '../../constants/apiWeather';
import Location from './Location';
import { RAIN } from '../../constants/weathers';
import transformWeather from '../../services/transformWeather';
import WeatherData from './WeatherData';

import './styles.css'; 

const data = {
    temperature: 5,
    weatherState: RAIN,
    humidity: 10,
    wind: '10 m/s'
}

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: 'Bogota D.C',
            data: data
        };
    }

    handleUpdateClick = () => {
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
        const { city, data } = this.state;

        return (
            <div className='weatherLocationCont'>
                <Location city={city} />
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Update</button>
            </div>
        );
    }
}

export default WeatherLocation;
