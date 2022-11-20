import React from "react";
import backendEcommerce from "./assets/backend-ecommerce.png";
import backendPelis from "./assets/backend-pelis.png";
import microfrontendcreate from "./assets/microfrontend-create-npm.png";
import style from './style.module.css';

const Nodejs = () => {
  return (
    <div className={style.container}>
      <a
        className={style.links}
        href="https://documenter.getpostman.com/view/19617428/UVyuQuM8"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="imagen" className={style.imgs} src={backendPelis} />
      </a>
      <a
        className={style.links}
        href="https://documenter.getpostman.com/view/19617428/UVyrVcZR"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="imagen" className={style.imgs} src={backendEcommerce} />
      </a>
      <a
        className={style.links}
        href="https://www.npmjs.com/package/microfrontend-create"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="imagen" className={style.imgs} src={microfrontendcreate} />
      </a>
    </div>
  );
};

export default Nodejs;
