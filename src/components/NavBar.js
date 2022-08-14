import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <>
        <nav>
            <Link style={{textDecoration: 'none', marginRight: '10px'}} to='/'>Home</Link>
            <Link style={{textDecoration: 'none', marginRight: '10px'}} to='/about'>About</Link>
            <Link style={{textDecoration: 'none', marginRight: '10px'}} to='/product'>Product</Link>
        </nav>
    </>
  )
}

export default NavBar;