import React from 'react';

import logo from '../../assets/img/LogoMain.png';
import './menu.css';

import Button from '../Button';


function Menu(){
  return(
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="BandsFlix" ></img>
      </a>

      <Button href="/" className="ButtonLink">
        Mais Vídeos
      </Button>
    </nav>
  );
}

export default Menu;