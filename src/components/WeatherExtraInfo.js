import React from 'react';
/**Template strings */
const WeatherExtraInfo = ({ humidity, wind }) => (
    <div>
        <span>{`${humidity}% - `}</span> 
        <span>{`${wind}`}</span>
    </div>
);

export default WeatherExtraInfo;