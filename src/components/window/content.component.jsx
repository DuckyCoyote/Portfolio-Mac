import React from "react";

import { PaperClipIcon } from "@heroicons/react/24/solid";

export default function Content({
  img,
  url,
  description,
  title,
  visibility,
}) {
  return (
    <div className="">
      {visibility && (
        <div className="contenido">
          <h1 className="text-center text-3xl">{title}</h1>
          <div className="info-container">
            <div className="image-container">
              <img src={img} alt="Project Image"></img>
              <a
                href={url}
                className="enlaces flex justify-center cursor-pointer"
                target="_blank"
              >
                <PaperClipIcon className="h-6 w-6 text-black cursor-pointer" />
                <p>GitHub Repository</p>
              </a>
            </div>
            <div className="descripcion">
              <h2 className="text-center text-2xl">Description</h2>
              <p className="text-justify text-">{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
