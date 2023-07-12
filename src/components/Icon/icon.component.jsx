import React from "react";

import './styles.css'

export default function Icon({name, icon, type, funcion}) {
  return (
    <div className={`icon-element`} onClick={funcion}>
      <div className="icon-image flex justify-center">
        <img src={icon} alt="folder" className="" />
      </div>
      <p className={`${type === "escritorio" ? "text-white" : "text-black"} text-center`}>{ name }</p>
    </div>
  );
}
