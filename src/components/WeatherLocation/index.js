import React from 'react';

import Location from './Location';
import WeatherData from './WeatherData';
import { RAIN } from '../../constants/weathers';

import './styles.css';

const data = {
    temperature: 5,
    weatherState: RAIN,
    humidity: 10,
    wind: '10 m/s'
}
const WeatherLocation = () => (
    <div className='weatherLocationCont'>
        <Location city={'Bogota D.C'} />
        <WeatherData data={data}></WeatherData>
    </div>
);

export default WeatherLocation;
