import React, { Component } from 'react';
import NavBar from '../../componets/NavBar/NavBar';
import MyLogo from '../../componets/MyLogo/MyLogo';
import './AboutPage.css';

class AboutPage extends Component {
    render () {
        return (
            <div className='AboutPage'>
                <div><MyLogo /></div>
                    <div>
                        <NavBar />
                    </div>
                <p>This will be my About section</p>
            </div>
        );
    };
}



export default AboutPage;