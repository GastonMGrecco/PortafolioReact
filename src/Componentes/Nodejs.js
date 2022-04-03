import React from "react";
import backendEcommerce from "./imagenes/backend-ecommerce.png";

const Nodejs = () => {
  return (
    <div className="portafolio">
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
