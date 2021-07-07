import React from 'react';
import { navbarData } from './navbarData';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar()
{
    return (
        <>
            <nav className='nav-menu'>
                <ul className='nav-menu-items'>
                    {navbarData.map((item, index) => {
                        return (
                           <li key={index} className={item.cName}>
                             <Link to={item.ID} activeClass="active-nav-text" offset={item.ID === '/andrew' ? -50 : 0} spy={true} hashSpy={true} smooth={true} duration={500}>
                                <span>{item.title}</span>
                             </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;