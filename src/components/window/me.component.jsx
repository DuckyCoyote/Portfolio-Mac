import React from 'react';

import boy from '../../assets/boy.gif';
import ReactLogo from '../../assets/react.png';
import NodeLogo from '../../assets/nodejs.png';
import JsLogo from '../../assets/js.png';

import './styles.me.css';

export default function Me() {
  return (
    <div className="contactme">
      <div className="contenido-me">
        <div className="contact text-center flex flex-col items-center">
          <h2 className="contact-title text_shadows">Contact Me</h2>
          <p>Alejandro Daniel Cruz Hernandez</p>
          <div className="social-links flex flex-col">
            <a
              href="https://www.linkedin.com/in/alejandro-daniel-cruz-hern%C3%A1ndez-05bb0b200/"
              target="_blank"
            >
              https://www.linkedin.com/Alejandro-Cruz
            </a>
            <a href="https://github.com/DuckyCoyote" target="_blank">
              https://github.com/DuckyCoyote
            </a>
          </div>
          <img src={boy} alt="gif boy 8bits" className="w-60 h-80" />
        </div>
        <div className="resumen flex flex-col items-center justify-center">
          <h2 className="resumen-title font-bold text-center m-4 text_shadows">
            Resumen
          </h2>
          <p className="text-justify">
            Como desarrollador web fullstack con experiencia en React y Node,
            cuento con un amplio conjunto de competencias que me permiten crear
            aplicaciones web completas y funcionales. Poseo un sólido
            conocimiento en el desarrollo de interfaces de usuario interactivas
            utilizando React, así como en la creación de servicios robustos en
            el backend mediante Node. Además, tengo experiencia en el diseño de
            bases de datos y la implementación de APIs RESTful.
          </p>
          <a
            href="https://drive.google.com/file/d/1CTAp645XVZUzPXxgw25A530OJ4ANLf-T/view?usp=sharing"
            target="_blank"
            className="btn mt-5 cursor-pointer"
          >
            Download Cv
          </a>
        </div>
        <div className="imagenes-me flex justify-around">
          <img src={JsLogo} alt="jslogo" className="w-28 h-28" />
          <img src={ReactLogo} alt="reactlogo" className="w-28 h-28" />
          <img src={NodeLogo} alt="nodelogo" className="w-28 h-28" />
        </div>
      </div>
    </div>
  );
}
