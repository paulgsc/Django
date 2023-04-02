import React from 'react';
import Dropdown from '../dropdown/Dropdown';
import { navItems } from './constants/navItems';
import './Header.css';

function Header() {
  
  return (
    <div className='header'>
      <nav className='header__nav'>
        <div className='header__nav__links'>
            <a className='header__nav__links-logo'>Logo</a>
            <div className='Header__nav__links-pages'>
                <ul className='links-pages'>
                    {navItems.map((item) => (
                      <div className='links-pages_list'>
                        <li key={item.id}><span className='pages_list'>{item.title}</span></li>
                      </div>
                    ))}
                </ul>
            </div>
            <div className='header__nav__links-gap'></div>
            <div className='header__nav__links-logins'>
                <a className='links-logins_login'><span className='logins_sign_in'>Sign In</span></a>
                <div className='links-logins_login-gap'></div>
                <a className='links-logins_sign'><span className='logins_sign_up'>Sign Up</span></a>
            </div>
        </div>
      </nav>
      <Dropdown />
    </div>

  )
}

export default Header


