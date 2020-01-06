import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
//import PropTypes from 'prop-types';
import './styles.css';

const WeatherLocation = () => (
    <div className="WeatherLocationCont">
        <Location city={"Madrid"}></Location>

        <WeatherData></WeatherData>
    </div>
    
    );


export default WeatherLocation;