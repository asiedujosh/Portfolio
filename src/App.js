import React from 'react'
import './App.scss';
import Home from './components/Home.js'
import About from './components/About.js'
import Skill from './components/Skill.js'
import Work from './components/Work.js'
import Contact from './components/Contact.js'
import Navbar from './components/Navbar'

import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from 'react-router-dom'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const App = () => {
    
    return(
      <React.Fragment>
      <div className="App">
      {/* Main div to work */}
      <div className = "wrapper">
      <Router>
        <Route render = {({location}) => console.log(location) || (
          <div>
          <Route exact = {true} path="/" render = {()=>{
            <Redirect to = "/" />
          }} />
          <Navbar />
          <div>
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={500}
                classNames = "fade"
              >
              <Switch location = {location}>
              <Route 
              exact = {true}
              path = "/"
              component = {Home}
              />
              <Route
              exact = {true}
              path = "/about"
              component = {About}
              />
              <Route 
              exact = {true}
              path = "/skills"
              component = {Skill}
              />
              <Route 
              exact = {true}
              path = "/works"
              component = {Work}
              />
               <Route 
              exact = {true}
              path = "/contact"
              component = {Contact}
              />
            </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
          </div>
        )} />
      </Router>
      </div>
     </div>
      </React.Fragment>
    )
  }


export default App