import React from "react";
import './Navbar.css'

import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to='/' className='nav-button'>Home</Link>
            <Link to='/user' className='nav-button'>Profile</Link>
            <Link to='/post' className='nav-button'>Post</Link>
        </nav>
    );
}

export default Navbar;
