import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
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
<div>
    <WeatherTemperature temperature={20} weatherState={CLOUDY}></WeatherTemperature>
    <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
</div>

);

export default WeatherData;