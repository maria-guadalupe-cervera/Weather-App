// import React from 'react';
// /* import Logo from '../img/logoHenry.png' */
// import SearchBar from './SearchBar.jsx';
 import './Nav.css';
// import { Link } from 'react-router-dom';


// function Nav({onSearch}) {
//   return (
//    /*  <nav className="navbar navbar-dark bg-dark"> */
//    <nav className="Nav">
//       <Link to='/'>
//         {/* <span className="navbar-brand"> */}
//         <span className="logo">
//          {/*  <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" /> */}
//           Henry - Weather App
//         </span>
//         </Link>
//        {/*  <SearchBar
//           onSearch={onSearch}
//         /> */}
//         <Link to='/about'>
//         <span className="about">About</span>
//       </Link>
//         <SearchBar
//           onSearch={onSearch}
//         />
//     </nav>
//   );
// };

// export default Nav;
import React from 'react';
// import Logo from '../img/logoHenry.png'
import cloud from /* '../img/cloud.png' */'../img/cloud1.png';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
//importo Link
import { Link } from "react-router-dom"
//dentro del componente hago los linkeos necesarios.


function Nav({onSearch}) {
  return (
    <nav className="navbar">
      <Link to='/'>
        <span className="navbar-brand">
      
          <img id="logo" src={cloud} width="30" height="30"className="d-inline-block align-top" alt=""/>
         WEATHER APP
        </span>
      </Link>
      <SearchBar
          onSearch={onSearch}
        />
      <Link to='/about'>
        <span>About me</span>
      </Link>
        
    </nav>
  );
};

export default Nav;
