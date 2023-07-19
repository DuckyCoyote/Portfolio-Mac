import React from "react";

import "./styles.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/alejandro-daniel-cruz-hern%C3%A1ndez-05bb0b200/"
            target="_blank"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://github.com/DuckyCoyote" target="_blank">Git</a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1CTAp645XVZUzPXxgw25A530OJ4ANLf-T/view?usp=sharing" target="_blank">CV</a>
        </li>
        <li>
          <a href="/">Especial</a>
        </li>
      </ul>
    </nav>
  );
}
