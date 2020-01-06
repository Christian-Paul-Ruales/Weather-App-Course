import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';
/**Codigo con mejor trazado */
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY 
} from './../../../constants/weathers';

const WeatherData = () => (
<div className="WheaterDataCont">
    <WeatherTemperature temperature={20} weatherState={CLOUDY}></WeatherTemperature>
    <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
</div>

);

export default WeatherData;