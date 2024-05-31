import React from 'react';
import './Nav.css';
import imgrs from './immagine/imgrs.png'


function Nav() {
  return (
    <nav>
    <div className='immagineNav'>
      <img src={imgrs} />
    </div>
    <div className='titoloNav'>
        <h1>RINALDO'S SOCIAL</h1>
    </div>
    </nav>
  )
}

export default Nav;
