import React from 'react';
import './Header.css'

import icon from '../assets/images.png'
function Header() {
  return(
    <div className="header">
      <h1>facebook.</h1>
      <ul className="perfil">
        <li>Meu perfil</li><img src={icon} width="30" height="20"/>
      </ul>
    </div>
  )
}
export default Header;