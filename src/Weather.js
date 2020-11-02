import React from "react";

import Forecast from "./Forecast";

export default function Weather(props){
         
    return(
       <div>
        <form >
            <input 
            className="city-input"
            type="text"
            placeholder="type a city name...."
            />
            <input type="submit"
            value="search" />
            </form>
            <ul>
                <li className="city-heading">{props.city}</li>
         <li>    Monday,16:31  </li>
            </ul>

            <h3>3 HOURS FORECAST:</h3>
        <div className="forecast-frame">
          <div className="row">
            <Forecast />
            <Forecast />
            <Forecast />
            <Forecast />
            <Forecast />
          </div>
          </div>
            </div>

    );
}