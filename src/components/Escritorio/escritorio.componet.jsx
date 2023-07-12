import React, { useState } from "react";

import Icon from "../Icon/icon.component";
import Window from "../window/window.component";
import Me from "../window/me.component";
import NotePad from "../window/notepad.component";
import Folder from "../window/folder.component";

import folder from "../../assets/folder3.svg";
import notepad from "../../assets/notepad.png";
import contact from "../../assets/contact.png";

import "./styles.css";

export default function Escritorio() {
  const [meVisible, setMeVisible] = useState(true);
  const [portfolioVisible, setPortfolioVisible] = useState(false);
  const [cvVisible, setCvVisible] = useState(false);

  const handleMeOpen = () => {
    setPortfolioVisible(false);
    setCvVisible(false);
    setMeVisible(true);
  };

  const handlePortfolioOpen = () => {
    setMeVisible(false);
    setCvVisible(false);
    setPortfolioVisible(true);
  };

  const handleCvOpen = () => {
    setMeVisible(false);
    setPortfolioVisible(false);
    setCvVisible(true);
  };

  return (
    <div className="escritorio">
      <div className="escritorio-iconos">
        <Icon
          name="Contact"
          type="escritorio"
          icon={contact}
          funcion={handleMeOpen}
        />
        <Icon
          name="Portfolio"
          type="escritorio"
          icon={folder}
          funcion={handlePortfolioOpen}
        />
        <Icon
          name="CV"
          type="escritorio"
          icon={notepad}
          funcion={handleCvOpen}
        />
      </div>
      
      <div className="escritorio-window">
        <Window
          windowTitle="Contact - Me"
          content={<Me />}
          typeWindow="notepad"
          visible={meVisible}
          setVisible={setMeVisible}
        />
        <Window
          windowTitle="Portfolio"
          content={<Folder />}
          typeWindow="folder-window"
          visible={portfolioVisible}
          setVisible={setPortfolioVisible}
        />
        <Window
          windowTitle="NotePad - CV"
          content={<NotePad />}
          typeWindow="notepad"
          visible={cvVisible}
          setVisible={setCvVisible}
        />
      </div>
    </div>
  );
}
