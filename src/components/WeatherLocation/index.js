import React, { Component } from 'react';

import Location from './Location';
import WeatherData from './WeatherData';
import { RAIN, SUN } from '../../constants/weathers';

import './styles.css';

const data = {
    temperature: 5,
    weatherState: RAIN,
    humidity: 10,
    wind: '10 m/s'
}

const data2 = {
    temperature: 35,
    weatherState: SUN,
    humidity: 80,
    wind: '5 m/s'
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
        console.log('Updating');
        this.setState({
            city: 'Barrancabermeja',
            data: data2
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
