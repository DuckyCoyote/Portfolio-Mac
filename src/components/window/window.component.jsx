import { XCircleIcon } from '@heroicons/react/24/solid';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { MinusCircleIcon } from '@heroicons/react/24/solid';

import './styles.css';

export default function Window({
  windowTitle,
  content,
  windowContent,
  visible,
  setVisible,
}) {
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <div>
      {visible && (
        <div className={'window'}>
          <div className="window-toolbar">
            <div className="window-botones">
              <XCircleIcon
                className="h-6 w-6 text-black cursor-pointer"
                onClick={handleClose}
              />
              <PlusCircleIcon className="h-6 w-6 text-black cursor-pointer" />
              <MinusCircleIcon
                className="h-6 w-6 text-black cursor-pointer"
                onClick={handleClose}
              />
            </div>
            <div className="window-title">
              <p>{windowTitle}</p>
            </div>
            <div></div>
          </div>
          <div className={windowContent}>{content}</div>
        </div>
      )}
    </div>
  );
}

/*
<figure className="window">
      <div className="window-toolbar">
        <div className="window-botones">
          <XCircleIcon className="h-6 w-6 text-black cursor-pointer" />
          <PlusCircleIcon className="h-6 w-6 text-black cursor-pointer" />
          <MinusCircleIcon className="h-6 w-6 text-black cursor-pointer" />
        </div>
        <div className="window-title">
          <p>NotePad - CV</p>
        </div>
        <div></div>
      </div>
      <div className="window-content">
        <div className="contenedor text-center">
          <div className="contact text-center">
            <h2 className="content-title">Curriculum Vitae</h2>
            <p>Alejandro Daniel Cruz Hernandez | (+52) 55 37 6070 62</p>
            <p>daniel_719021@hotmail.es</p>
            <div className="social-links flex flex-col">
              <a href="https://www.linkedin.com/in/alejandro-daniel-cruz-hern%C3%A1ndez-05bb0b200/">
                https://www.linkedin.com/Alejandro-Cruz
              </a>
              <a href="https://github.com/DuckyCoyote">
                https://github.com/DuckyCoyote
              </a>
            </div>
          </div>
          <div className="educacion">
            <h2 className="educacion-title font-bold text-center m-4">
              Educación
            </h2>
            <h3 className="text-xl">Universidad Nacional Autonoma De Mexico</h3>
            <p>Ingenieria en Computacion</p>
            <p>Estudiante de Universidad desde el año 2020</p>
          </div>
          <div className="resumen">
            <h2 className="resumen-title font-bold text-center m-4">Resumen</h2>
            <p className="text-justify">
              Como desarrollador web fullstack con experiencia en React y Node,
              cuento con un amplio conjunto de competencias que me permiten
              crear aplicaciones web completas y funcionales. Poseo un sólido
              conocimiento en el desarrollo de interfaces de usuario
              interactivas utilizando React, así como en la creación de
              servicios robustos en el backend mediante Node. Además, tengo
              experiencia en el diseño de bases de datos y la implementación de
              APIs RESTful.
            </p>
          </div>
          <div className="competencias">
            <h2 className="competencias-title font-bold text-center m-4">
              Competencias
            </h2>
            <div className="competencias-contenedor">
              <ul className="competencias-lista">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ReactJs</li>
                <li>NodeJs</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Docker</li>
                <li>Linux</li>
              </ul>
            </div>
          </div>
          <div className="experiencia">
            <h2 className="experiencia-title font-bold text-center m-4">
              Experiencia
            </h2>
            <div className="experiencia-contenedor">
              <h3 className="font-bold text-start m-4">FrontEnd</h3>
              <ul className="experiancia-lista">
                <li>
                  He realizado varios proyectos escolares utilizando React como
                  tecnología principal en el desarrollo frontend. Estos
                  proyectos me han permitido adquirir un amplio conocimiento en
                  la creación de interfaces de usuario interactivas y dinámicas,
                  utilizando componentes reutilizables y aplicando buenas
                  prácticas de desarrollo.
                </li>
                <li>
                  Altrabajar en proyectos escolares con React, he adquirido
                  habilidades en el manejo de estados, gestión de rutas, consumo
                  de APIs y optimización del rendimiento. Además, he aprendido a
                  utilizar bibliotecas y frameworks complementarios, como Redux
                  o React Router, para mejorar la eficiencia y escalabilidad de
                  mis aplicaciones frontend.
                </li>
              </ul>
            </div>
            <div className="experiencia-contenedor">
              <h3 className="font-bold text-start m-4">BackEnd</h3>
              <ul className="experiancia-lista">
                <li>
                  Como parte de mi desarrollo profesional, he emprendido
                  diversos proyectos personales utilizando Node.js como
                  tecnología principal en el backend. Estos proyectos me han
                  brindado una sólida experiencia en la creación de APIs
                  RESTful, la gestión de bases de datos y la implementación de
                  lógica de negocio compleja.
                </li>
                <li>
                  Al programar en Node, he trabajado con frameworks como
                  Express.js para construir servicios web eficientes y seguros.
                  También he utilizado bases de datos NoSQL como MongoDB y he
                  implementado autenticación y autorización mediante
                  herramientas como JSON Web Tokens (JWT). Estos proyectos me
                  han permitido adquirir un profundo conocimiento en el
                  desarrollo backend con Node y la creación de servicios
                  escalables y robustos.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </figure>

*/
