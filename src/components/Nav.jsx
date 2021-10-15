import "./Nav.css";
import React from "react";
import cloud from "../img/cloud1.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
//importo Link
import { Link } from "react-router-dom";
//dentro del componente hago los linkeos necesarios.

function Nav({ onSearch }) {
  return (
    <nav className="navbar">
      <Link to="/">
        <span className="navbar-brand">
          <img
            id="logo"
            src={cloud}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          WEATHER APP
        </span>
      </Link>
      <SearchBar onSearch={onSearch} />
      <Link to="/about">
        <span>About me</span>
      </Link>
    </nav>
  );
}

export default Nav;
