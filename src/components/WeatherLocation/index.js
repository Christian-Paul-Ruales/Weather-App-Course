import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

import TransformWeather from './../../Services/TransformWeather';
//import PropTypes from 'prop-types';
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY 
} from './../../constants/weathers';


/**uso las llaves cuando no exporte con default */
import { api_weather } from  './../../constants/api_url';

const data = {
    temperature: 25,
    weatherState: CLOUDY,
    humidity: 12,
    wind: '10m/s'
}



class WeatherLocation extends Component {

    constructor(){
        super(); /**siempre colocar super para poder utilizar todas las funciones */
        this.state = {
            city: 'Quito, Ecuador',
            data: data
        }
    }
    
   
    handleUpdateClick = () => {
        fetch(api_weather).then(resolve=> {
            
            return resolve.json();
        }).then(data=>{
            const newWeather =TransformWeather(data)
            console.log(newWeather);
            debugger;
            this.setState({data: newWeather});
        });

        console.log("Actualizado");
        /** para actualizar al estado en una funcion se debe invocar siempre a setState*/
        
    }

    render(){
        const { city, data } = this.state;

        return(
            <div className="WeatherLocationCont">
                <Location city={ city }></Location>
        
                <WeatherData data={ data }></WeatherData>
                
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

/**promise: peticiones asincronas, estados pendiente, cumplida y rechazada */

/**
 * let promesa = new Promise((resolve,rejected)=>
 * {
 *  setTimeout(() =>{
 *      resolve("Exito")
 *  },2000) la primesa se va a demorar 2 seg
 * });
 * 
 * promesa.then((mensaje)=>{
 *  console.log(mensaje);
 * 
 *  * }),catch.log(mensaje);
 * 
 */
export default WeatherLocation;