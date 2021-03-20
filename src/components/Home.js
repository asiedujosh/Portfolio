import React from 'react'
import {NavLink} from 'react-router-dom'
import profile from '../images/josh2.jpg'
import BackgroundAnim from './BackgroundAnim'
import DesktopBackWeb from '../desktopCanvas/webDesk'


const Home = () => {
    return(
        <React.Fragment>
         <div className = "background-image">
            <BackgroundAnim />
        </div>
        <div className = "background_image_desktop">
            <DesktopBackWeb/>
        </div>
        <section className = "main_section">
      <div>{/* Left Space */}</div>
      {/* Main div to work */}

        <div>
        <div className = "desktop_v1">
        <div>
        <h2 className = "header">
            <span className = "line">
            <span className = "line_inner">Get</span>
            </span>
            <span className = "line">
            <span className = "line_inner">Creative</span>
            </span>
            <span className = "line">
            <span className = "line_inner">With</span>
            </span>
            <span className = "line">
            <span className = "line_inner">Your</span>
            </span>
            <span className = "line">
            <span className = "line_inner">Business</span>
            </span>
        </h2>
       
         <NavLink exact to = "/works" style ={{textDecoration: "none"}}>
        <a className = "works see_works">
                <span>See Works</span>
                <div className = "wave"></div>
        </a>
        </NavLink>

        </div>
        <div>
        <div className = "desktop_intro">
        <div>
        <img src = {profile} alt = "profile Image" className = "desk_img"/>
        </div>
        <div>
        <h2>Hi, I am Josh</h2>
        <span>Here to make your ideas a reality</span>
        </div>
        </div>
        </div>
        </div>
        {/*css Image */}
        <div className = "home-des-container">
            <div  className = "prof_cont">
            <div>
            <img src = {profile} alt = "profile Image" className = "home-des profile-image"/>
            </div>
            </div>
            <div className = "home-des home_card">
                <span className = "profile-text">
                <span className = "intro">
                    Hi, I am Josh
                </span>
                </span>
            </div>
        </div>
        </div>
        <div>{/* Right Space */}</div>
      </section>
      <section className = "overlay"></section>
        </React.Fragment>
    )
}

export default Home
