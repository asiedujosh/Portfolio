import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import profile from '../images/josh.jpg'
import Moon from './moon'
import Space from './Space'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const About = () => {
        //let quotesB = gsap.utils.toArray('.quote_block')

    useEffect(()=>{
        setTimeout(()=>{
            const t2 = gsap.timeline({
                scrollTrigger:{
                    trigger:".about_section_one",
                    pin: true,
                    scrub: true 
                }
            })
            const t1 = gsap.timeline({
                scrollTrigger:{
                    trigger: ".pin_container",
                    scrub: 1,
                    start: "top top",
                    end: "bottom",
                    pin: true
                }
            })
            const t3 = gsap.timeline({
                scrollTrigger:{
                    trigger: ".about_section_four",
                    start: "top center",
                    toggleActions: "restart pause reverse pause"
                }
            })
            t1.from(".about_section_three",{duration: 0.5, x: "-100%"})
            t2.from(".quote_block1", {duration: 0.2, opacity: 0})
            t2.from(".space_ship", {duration: 0.5, x: "-70%", y: "120%"})
            t3.from(".four_one",{duration: 0.2, x:"-120%"})
            t3.from(".four_two",{duration: 0.2, x:"-120%"})
            t3.from(".four_three",{duration: 0.2, x:"-120%"})
            t3.from(".four_four",{duration: 0.2, x:"-120%"})
        }, 600)
    },[])
    
    return(
        <React.Fragment>
            <div className = "about_container">
                <section className = "about_section_one space pt">
                    <div></div>
                    <div className = "about_inner_section abt_one">
                        <span className = "quote">
                        <span>"Design adds value faster</span>
                        <span className = "quote_block1" style = {{paddingLeft: "0.2em"}}>than it adds cost"</span>
                        <span className = "writer quote_block2">-- Joel Spolsky</span>
                        </span>
                        <div className = "space_agency">
                        <div className = "moon_frame">
                            <Moon/>
                            </div>
                            <div className = "space_ship">
                                <Space/>
                            </div>
                        </div>
                    </div>
                    <span className = "section_three_backdrop one_drop">
                        Cool Space Exploration
                    </span>
                    <div></div>
                </section>

                <div className = "pin_container">
                <section className = "about_section_two space pt">
                <div></div>
                <div className = "about_inner_section abt_two">
                    <div className = "abt_mobile_section_2">
                        <div className = "abt_mobile">
                        <img src = {profile} alt = "Profiles" className = "about_page_img"/>
                        </div>
                    <div className = "abt_desk">
                        <p className = "img_intro">UI and UX design alongside developing fun 
                        software is a passion and a hobby.</p>
                        <p className = "img_intro_two">
                            I will be glad to use my knowledge in all areas to elevate
                            your web or softwares to a new level
                        </p>
                        <p className = "abt_contact_btn">
                        <NavLink exact to = "/contact" style ={{textDecoration: "none", color: "#000"}}
                        className = "works see_works abt_cont">
                            <span>Contact Me</span>
                        <div className = "wave"></div>
                        </NavLink>
                        </p>
                        </div>
                    </div>
                    <div className = "abt_desktop_section_2">
                    <div className = "abt_desk">
                        <p className = "img_intro">UI and UX design alongside developing fun 
                        software is a passion and a hobby.</p>
                        <p className = "img_intro_two">
                            I will be glad to use my knowledge in all areas to elevate
                            your web or softwares to a new level
                        </p>
                        <p className = "abt_contact_btn">
                        <NavLink exact to = "/contact" style ={{textDecoration: "none", color: "#000"}}
                        className = "works see_works abt_cont">
                            <span>Contact Me</span>
                        <div className = "wave"></div>
                        </NavLink>
                        </p>
                        </div>
                        <div className = "abt_desk">
                        <img src = {profile} alt = "Profiles" className = "about_page_img"/>
                        </div>
                    </div>
                </div>
                <div></div>
                </section>

                <section className = "about_section_three space pt">
                <div></div>
                <div className = "about_inner_section abt_three">
                    <div className = "abt_three_mid">
                    I am a <span className = "important">
                    MEARN full stack software</span> 
                    developer with a 3 year experience in building
                    <span className = "important">
                    web application, desktop application and mobile applications 
                    </span>
                    with cutting edge technologies.
                    </div>
                    <span className = "section_three_backdrop two_drop">
                        lets Talk 
                    </span>
                </div>
                <div></div>
                </section>
                </div>

                <section className = "about_section_four space pt">
                <div></div>
                <div className = "about_inner_section abt_four">
                <div className = "job four_one">
                <span className = "date">2013 - 2017</span>
                <hr/>
                <div>
                Bsc In Agriculture
                <span className = "sch">University Of Ghana</span>
                <span>*</span>
                </div>
                </div>
                <div className = "job four_two">
                <span className = "date">2017 - 2018</span>
                <hr/>
                <div>
                Diploma In Business and Information Technology
                <span className = "sch">IPMC</span>
                </div>
                </div>
                <div className = "job four_three">
                <span className = "date">2018 - 2019</span>
                <hr/>
                <div>
                <span>
                Frontend software developer at OurGhana Ltd
                </span>
                </div>
                </div>
                <div className = "job four_four">
                <span className = "date">2020 - 2021</span>
                <hr/>
                <div>
                <span>
                Graphic designer and web developer at Absolute Brand Media     
                </span> 
                </div>
                </div>
                </div>
                <div></div>
                </section>
            </div>
        </React.Fragment> 
    )
}

export default About