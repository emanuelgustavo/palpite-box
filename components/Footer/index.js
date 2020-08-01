import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 p-2">
      <div className="my-3 flex px-2 justify-center">
        <p className="text-gray-400">
          Projeto desenvolvido por
          <strong> Emanuel G. Vierne </strong>
          :
        </p>
        <a
          className="mx-2 hover:opacity-25 text-gray-400"
          href="https://github.com/emanuelgustavo"
        >
          github
        </a>
        <p className="text-white"> / </p>
        <a
          className="mx-2 hover:opacity-25 text-gray-400"
          href="https://www.linkedin.com/in/emanuelgustavovierne"
        >
        linkedin
        </a>
      </div>
      <div className="md:flex md:justify-center p-2 my-2">
        <img className="mx-10" src="/assets/logos/logo_semana_fsm.png" alt="" />
        <img className="mx-10" src="/assets/logos/logo_devpleno.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;