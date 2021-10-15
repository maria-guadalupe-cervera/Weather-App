// import React, { useState } from 'react';    //import los estados de react
// import './App.css'; //importo el css
// import Nav from '../components/Nav.jsx';  //import el nav
// import Cards from '../components/Cards.jsx';  //importo cards
// import About from '../components/About';  //importo la pag about
// import City from '../components/City';    //importo city
// import { Route } from 'react-router-dom'; //importo route

// const apiKey = '4ae2636d8dfbdc3044bede63951a019b';  //doy api key

// function App() {                              //la funcion app
//   const [cities, setCities] = useState([]);   //empiezo el state sin nada, despés le pusheare
//   function onClose(id) {                      //la funcion cerrar, recibe una id para cerrar
//     setCities(oldCities => oldCities.filter(c => c.id !== id));   //set cities, es una funcion que recibe las old cities y la filtra, sacando la que tenga el id igual al pasado por parametro
//   }
//   function onSearch(ciudad) {                 //funcion buscar la ciudad recibida por parametro
//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`) //en la api busco esa ciudad, con el apiKey
//       .then(r => r.json())  //la vuelvo json
//       .then((resource) => { //recibo la respuesta
//         if(resource.main !== undefined){    //y si existe
//           const ciudad = {                  //la ciudad va a tener, los siguentes parametros
//             min: Math.round(resource.main.temp_min),
//             max: Math.round(resource.main.temp_max),
//             img: resource.weather[0].icon,
//             id: resource.id,
//             wind: resource.wind.speed,
//             temp: resource.main.temp,
//             name: resource.name,
//             weather: resource.weather[0].main,
//             clouds: resource.clouds.all,
//             latitud: resource.coord.lat,
//             longitud: resource.coord.lon
//           };
//           setCities(oldCities => [...oldCities, ciudad]);// vuelvo la set cities con el valor del oldcities concatenados con la ciudad buscada
//         } else {
//           alert("Ciudad no encontrada"); //si no esta devolver...
//         }
//       });
//   }
//   function onFilter(ciudadId) {   //la funcion filtrar, recibe el id de la ciudad
//     let ciudad = cities.filter(c => c.id === parseInt(ciudadId)); //la ciudad va a valer, las cities filtradas 
//     if(ciudad.length > 0) {
//         return ciudad[0];
//     } else {
//         return null;
//     }
//   }
//   return (
    
//     <div className="App">
//       {/* <Nav onSearch={onSearch}/> */}
//       {/* <div> */}
//         {/* <Cards
//           cities={cities}
//           onClose={onClose}
//         /> */}
//          <Route path='/' render={() => <Nav on Search={onSearch} />}/>
//       <Route path='/about' component={About}/>
//       <Route exact path='/' render={() =>  <Cards cities={cities} onClose={onClose} />}/>
//       <Route exact path='/ciudad/:ciudadId' 
//              render={({match}) => (<City city={onFilter(match.params.ciudadId)}/>)}/>
//      {/*  </div> */}
//       <hr />
//     </div>
    
//   );
// }

// export default App;

import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
// importo los componentes About y City
import About from '../components/About';
import City from '../components/City';
// importo Route:
import { Route } from 'react-router-dom';
import video from'../img/video.mp4';


function App() {
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
   
    <div className="App">
      <video autoPlay loop muted
      style={{
        position:'absolute',
        width:"100%",
        left:"50%",
        height:"100%",
        objectFit:"cover",
        transform:"translate(-50%,-50%)",
        zIndex:"-1"
      }}>
        <source src={video} type="video/mp4"/>
      </video>
      <Route path='/' render={() => <Nav onSearch={onSearch} />}/>
      <Route path='/about' component={About}/>
      <Route exact path='/' render={() =>  <Cards cities={cities} onClose={onClose} />}/>
      <Route exact path='/ciudad/:ciudadId' 
             render={({match}) => (<City city={onFilter(match.params.ciudadId)}/>)}/>
      <hr />
    </div>
    
  );
}

export default App;