import React from 'react';
import { Link } from 'react-router-dom';
import oo from '../../resources/images/Rectangle 24.png';

const Navbar = () => {
    return (
        <nav>
            <div id='jadoo'>
            <h2>Jad<span id='jadoodouble'>oo</span></h2>
            </div>
            
            <ul>
            <li><Link classname='linkClass'>Destinations</Link></li>
            <li><Link>Hotels</Link></li>
            <li><Link>Fligts</Link></li>
            <li><Link>Bookings</Link></li>
            <li><Link>Login</Link></li>
            <li><Link>Signup</Link></li>
            <li><Link>EN</Link></li>
            </ul>
            
        </nav>
    );
};

export default Navbar;