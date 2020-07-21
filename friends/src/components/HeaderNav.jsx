import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <header>
            <h1>Make Friends</h1>
            <nav>
                <Link to='/login' >Login</Link>
                <Link to='/friends' >Friends</Link>
            </nav>
        </header>
    );
};

export default HeaderNav;
