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
                <p>Link Github stuff</p>
            </div>
        );
    };
}


export default ProjectsPage