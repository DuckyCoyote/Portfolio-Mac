import { React, useState } from "react";

import Icon from "../Icon/icon.component";
import Content from "./content.component";

import Picture from "./../../assets/picture.png";
import Shop from "./../../assets/shop.png";
import Client from "./../../assets/client.png";

import image1 from "./../../assets/service-1.svg";
import image2 from "./../../assets/service-2.svg";
import image3 from "./../../assets/service-3.svg";

import "./styles.folder.css";

const repository = [
  {
    img: image1,
    url: "https://github.com/DuckyCoyote/Upload-Images",
    title: "Upload Images API",
    description:
      "Esta es una simple API para subir imagenes y mostrarlas en un simple FrontEnd ",
  },
  {
    img: image2,
    url: "https://github.com/DuckyCoyote/React-Cart",
    title: "React Cart",
    description: "Ecommerce minimalista con ReactJs y Taiwind CSS",
  },
  {
    img: image3,
    url: "https://github.com/DuckyCoyote/API_STORE",
    title: "Api Ecommerce",
    description: "Ecommerce API con Nodejs y PostgreSQL",
  },
];

export default function Folder() {
  const [visibility1, setVisibility1] = useState(true);
  const [visibility2, setVisibility2] = useState(false);
  const [visibility3, setVisibility3] = useState(false);

  const handleV1 = () => {
    setVisibility3(false);
    setVisibility2(false);
    setVisibility1(true);
  };

  const handleV2 = () => {
    setVisibility1(false);
    setVisibility3(false);
    setVisibility2(true);
  };

  const handleV3 = () => {
    setVisibility1(false);
    setVisibility2(false);
    setVisibility3(true);
  };

  return (
    <div className="folder-content flex flex-col">
      <div className="toolbar-folder flex justify-between">
        <p className="text-xl">4 items</p>
        <p className="text-xl">464 GB total</p>
        <p className="text-xl">17 GB avalible</p>
      </div>
      <div className="folder flex m-8">
        <div className="icons">
          <Icon
            name="Uploader"
            icon={Picture}
            clases="folder-icon"
            funcion={handleV1}
          />
          <Icon name="Ecommerce" icon={Shop} funcion={handleV2} />
          <Icon name="API" icon={Client} funcion={handleV3} />
        </div>
        <Content
          img={repository[0].img}
          url={repository[0].url}
          description={repository[0].description}
          title={repository[0].title}
          visibility={visibility1}
        />
        <Content
          img={repository[1].img}
          url={repository[1].url}
          description={repository[1].description}
          title={repository[1].title}
          visibility={visibility2}
        />
        <Content
          img={repository[2].img}
          url={repository[2].url}
          description={repository[2].description}
          title={repository[2].title}
          visibility={visibility3}
        />
      </div>
    </div>
  );
}
