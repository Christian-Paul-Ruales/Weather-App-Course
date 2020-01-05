import React from 'react';
import PropTypes from 'prop-types';

/**Template strings */
const WeatherExtraInfo = ({ humidity, wind }) => (
    <div>
        <span>{`${humidity}% - `}</span> 
        <span>{`${wind} de viento`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind : PropTypes.string.isRequired,
};

export default WeatherExtraInfo;