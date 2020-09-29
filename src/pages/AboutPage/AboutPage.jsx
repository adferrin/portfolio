import React, { Component } from 'react';
import NavBar from '../../componets/NavBar/NavBar';
import MyLogo from '../../componets/MyLogo/MyLogo';
import './AboutPage.css';

class AboutPage extends Component {
    render () {
        return (
            <div className='AboutPage'>
                <div className='Logo'>
                    <MyLogo />
                </div>
                <div className='NavBar'>
                    <NavBar />
                </div>
                <div className='AboutMe'>
                    <h1>What I'm about</h1>
                        <p>Here is stuff i'm about</p>
                </div>
                <div className='ListOfSkills'>  
                    <h3>Here's some stuff I can do:</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>PostgeSQL</li>
                            <li>Socket.io</li>
                            <li>Github // Gitflow</li>
                        </ul>
                </div>      
            </div>
        );
    };
}



export default AboutPage;