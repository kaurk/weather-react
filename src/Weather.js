import React from "react";
import "./index.css";
import Forecast from "./Forecast";

export default function Weather(props){
         
    return(
       <div>
        <form >
            <input 
            className="city-input"
            type="text"
            placeholder="Type a city...."
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
            <div className="column-5">
            <Forecast />
            <Forecast />
            <Forecast />
            <Forecast />
            <Forecast />
          </div>
          </div>
          </div>
            </div>

    );
}