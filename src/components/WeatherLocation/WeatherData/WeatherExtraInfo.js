import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/**Template strings */
const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="WeatherExtraInfo">
        <span className="extraInfoText" >{`Humedad: ${humidity} % - `}</span> 
        <span className="extraInfoText" >{`Viento: ${wind} de viento`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind : PropTypes.string.isRequired,
};

export default WeatherExtraInfo;