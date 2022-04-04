import React from "react";
import backendEcommerce from "./imagenes/backend-ecommerce.png";
import backendPelis from "./imagenes/backend-pelis.png";
const Nodejs = () => {
  return (
    <div className="portafolio">
      <a
        className="LinkP"
        href="https://documenter.getpostman.com/view/19617428/UVyuQuM8"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="imagen" className="Lenguaje" src={backendPelis} />
      </a>
      <a
        className="LinkP"
        href="https://documenter.getpostman.com/view/19617428/UVyrVcZR"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="imagen" className="Lenguaje" src={backendEcommerce} />
      </a>
    </div>
  );
};

export default Nodejs;
