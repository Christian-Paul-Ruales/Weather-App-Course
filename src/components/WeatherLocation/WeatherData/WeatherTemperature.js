import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';

import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY 
} from './../../../constants/weathers';


const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
}

const getWeatherIcon= (weatherState)=>{
    const icon = icons[weatherState];

    const sizeIcon = "4x";

    if (icon) {
        return ( <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>);
    }else{
        return ( <WeatherIcons className="wicon"  name={"day-sunny"} size={sizeIcon}/>);

    }
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="WeatherTemperature">
       {
           getWeatherIcon(weatherState)
       }
        <span className="temperature">{temperature}</span>
        <span className="temperatureType"> {`° C`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string.isRequired,/**Si o si es necesario ese campo */
};

export default WeatherTemperature;