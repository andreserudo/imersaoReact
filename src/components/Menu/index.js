import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/LogoMain.png';
import './menu.css';

import Button from '../Button';


function Menu(){
  return(
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="BandsFlix" ></img>
      </Link>

      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Mais Vídeos
      </Button>
    </nav>
  );
}

export default Menu;