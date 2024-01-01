import React from 'react';
import './Styles/Navbar.css';
import Image from './Images/search.svg';
import Image2 from './Images/business man.svg';
import Context from './Context';


function Navbar(props) {
    return (
        <div>
          <div className='navbar'>
          <ul id='Navbar'>
            <a
            id='home'
            href='#'
            >Home</a>
            <a 
            id='about'
            href='#'
            >About</a>
            <a 
            id='contact'
            href='#'
            >Contact</a>
            <a 
            id='review'
            href='#'
            >Review</a>
            </ul>

           <img
            className='image'
            src={Image}/>
            <img className='Image2'
            src={Image2}/>
          </div>
          <Context name= "lorem ipsum tua Iesu tet et unum ipsumtua dua fiat test wan "/>
        </div>
    );
}

export default Navbar;