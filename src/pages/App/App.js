import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import MyLogo from '../../componets/MyLogo/MyLogo';
import AboutPage from '../AboutPage/AboutPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="header-footer">React Portfolio</header>
          <Switch>
            <Route exact path='/' render={() =>
              <HomePage />
            }/>
            <Route exact path='/about' render={({ histroy }) =>
              <AboutPage
                history={histroy}
              />
            } />
            <Route exact path='/projects' render={({ histroy }) =>
              <ProjectsPage 
                histroy={histroy}
              />
            } />
            <Route exact path='/logo' render={() =>
              <MyLogo />
            } />
          </Switch>
      </div>
    );
  }
}
 

export default App;
