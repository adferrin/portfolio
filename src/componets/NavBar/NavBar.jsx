import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
    return (
        <div className='NavBar'>
            <div>
                <Link to='/about' className='NavBar-link'>About Me</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to='/projects' className='NavBar-link'>Projects</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href='https://github.com/adferrin'>Github</a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href='https://www.linkedin.com/in/austin-ferrin-1798641b2/'>Linkedin</a>
            </div>
        </div>
        
    );
};

export default NavBar;
