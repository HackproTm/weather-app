import React, { Component } from 'react';

import { api_weather } from '../../constants/apiWeather';
import Location from './Location';
import transformWeather from '../../services/transformWeather';
import WeatherData from './WeatherData';

import './styles.css'; 

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: 'Bogota D.C',
            data: null
        };
    }

    componentDidMount() {
        this.handleUpdateClick();    
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
                {data ?
                    <WeatherData data={data}></WeatherData> :
                    "Cargando..."
                }
            </div>
        );
    }
}

export default WeatherLocation;
