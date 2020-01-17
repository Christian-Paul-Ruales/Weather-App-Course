import convert from 'convert-units'

import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY 
} from './../constants/weathers';

const getTemp = Kelvin => {

    return convert(Kelvin).from("K").to("C").toFixed(2);
}


const getWeatherSate = weather_data => {
    return SUN;
}
/** al extender de component tenemos mas posibilidades
 * 
 */


const TransformWeather = weather_data => {
     const {humidity, temp} = weather_data.main;
     const { speed } = weather_data.wind;
     const weatherState = getWeatherSate(weather_data);
     const temperature = getTemp(temp);
     
     const data = {
         humidity,
         temperature,
         weatherState,
         wind: `${ speed } m/s`
     }

     return data;
 }

 export default TransformWeather;