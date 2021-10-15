// import React from "react";

// export default function Ciudad({city}) {
//     return (
//         <div>
//              <h2>{city.name}</h2>
//              <div>
//                  <div>Temperatura: {city.temp} ºC</div>
//                  <div>Clima: {city.weather}</div>
//                  <div>Viento: {city.wind} km/h</div>
//                  <div>Cantidad de nubes: {city.clouds}</div>
//                  <div>Latitud: {city.latitud}º</div>
//                  <div>Longitud: {city.longitud}º</div>
//              </div>
//         </div>
//     )
// }
import React from "react";
//creo el componente funcional City que mostrará los detalles de una ciudad
//recibida por props en la ruta /ciudad/{ciudadId}
import style from './City.css';
export default function City({ city }){
    return(
        <div className="container">
            <h2>{city.name}</h2>
            <div>
                <div>Temperatura: {city.temp}</div>
                <div>Clima: {city.weather}</div>
                <div>Viento: {city.wind}</div>
                <div>Nubosidad: {city.clouds}</div>
            </div>
        </div>
    )
}
