import React, { Component } from 'react';
import NavBar from '../../componets/NavBar/NavBar';
import MyLogo from '../../componets/MyLogo/MyLogo';
import './ProjectsPage.css';

class ProjectsPage extends Component {
    render () {
        return (
            <div className='ProjectsPage'>
                <div><MyLogo /></div>
                    <div>
                        <NavBar />
                    </div>
                <p className='NightOwlP'><a href='https://seir629-nightowl.herokuapp.com/'>Night Owl </a>
                    is the brainchild of three General Assembly Students Aaron Rascon, Brian Kelly, and Austin Ferrin. 
                    In the time of Covid we wanted to be able to bring people together on a purly social platform away from work video calls and madding family group chats you never wanted to be a part of. 
                    Night Owl is an App that allows you and your friends to be able to watch anything on Youtube and chat with eachother in real time. It has a retro feel in nature and is here for you endless viewing needs.
                    
                </p>
            </div>
        );
    };
}


export default ProjectsPage;