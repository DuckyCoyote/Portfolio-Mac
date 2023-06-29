import React from "react";

import NavBar from "./navbar.component";

import logo from "../../assets/apple-mac.svg";

import './styles.css'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="apple icon svg" className="logo-svg" />
      </div>
      <NavBar/>
    </header>
  );
}
