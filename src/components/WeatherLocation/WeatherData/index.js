import React from 'react';
import PropTypes from 'prop-types'

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

const WeatherData = ({ data: { temperature,weatherState,humidity,wind } }) => {/** destructuring mas completo, esto es igual a const data { elemento,elemento2 } = objeto*/
    return(
<div className="WheaterDataCont">
    <WeatherTemperature temperature={temperature} weatherState={weatherState}></WeatherTemperature>
    <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
</div>

);
};

WeatherData.propTypes={

    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    }
        
    )
};
export default WeatherData;