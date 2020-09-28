import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../componets/NavBar/NavBar';
import MyLogo from '../../componets/MyLogo/MyLogo';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="HomePage">
            <div><MyLogo /></div>
                <div>
                    <NavBar />
                </div>        
        </div>
    );
};

export default HomePage;