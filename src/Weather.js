import React from "react";
//import axios from "axios";

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
            </div>

    );
}