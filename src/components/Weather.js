import React from 'react';

const Weather = ({weatherData}) => {

    //Extract

    const {name, main} = weatherData

    if(!name){return null}

    //Kelvin
    const kelvin = 273.15

    return (
        <div className = "card-panel white col s12">
            <div className = "black-text">
                <h2>The weather in {name} is:</h2>
                <p className = "temperatura">
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)}<span> &#x2103; </span>
                </p>
                <p>Max Temp: &nbsp; 
                     {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}<span> &#x2103; </span>
                </p>
                <p>Min Temp:  &nbsp;
                     {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}<span> &#x2103; </span>
                </p>
            </div>
        </div>
      );
}
 
export default Weather;