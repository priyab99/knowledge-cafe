import React from 'react';
import './Header.css';

const Header = () => {
    return (
       <nav className='header'>

        <h2>Knowledge Cafe</h2>
        <div>
           <a href="/Blog">Blog
            </a>
            <a href="/info">Info
                </a>
                <a href="/Login">Login</a>
        </div>

       </nav>
    );
};

export default Header;