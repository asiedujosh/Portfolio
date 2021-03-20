import React, {useEffect} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Skill = () => {
        //let quotesB = gsap.utils.toArray('.quote_block')
      useEffect(()=>{
            setTimeout(()=>{
                
                const t1 = gsap.timeline({
                    scrollTrigger:{
                        trigger: ".skill_section_two",
                        scrub: 1,
                        start: "top top",
                        end: "bottom",
                        pin: true
                    }
                })

                const t2 = gsap.timeline({
                    scrollTrigger:{
                        trigger: ".skill_section_three",
                        scrub: 1,
                        start: "top top",
                        end: "bottom",
                        pin: true
                    }
                })

                t1.from(".skill_section_three",{duration: 0.2, x: "-100vw"})
                t2.from(".skill_section_four",{duration: 0.2, x: "20vw"})
                //t1.from(".skill_section_four",{duration: 0.5, x: "200%"})
            }, 600)
        },[]) 
    
    return(
        <React.Fragment>
            <div className = "skill_container">
                <section className = "skill_section_one space pt">
                    <div></div>
                    <div className = "skill_inner_section">
                    <h4>Frontend Skill</h4>
                    <hr/>
                    <div className = "skill_list">
                        <span>HTML</span>
                    </div>
                    <hr/>
                    <div className = "skill_list">
                    <span>CSS</span>
                    </div>
                    <hr/>
                    <div className = "skill_list">
                    <span>React Js</span>
                    </div>
                    <hr/>
                    <div className = "skill_list">
                    <span>Electron Js</span>
                    </div>
                    <hr/>
                    <div className = "skill_list">
                    <span>Material UI</span>
                    </div>
                    <hr/>
                    <div className = "skill_list">
                    <span>Core UI</span>
                    </div>
                    <hr/>
                    <div className = "skill_list">
                    <span>Bootstrap</span>
                    </div>
                </div>
                    <div></div>
                </section>
                
                <div className = "skill_part_2">
                <section className = "skill_section_two space pt">
                <div></div>
                <div className = "skill_inner_section">
                    <h4>Backend Skill</h4>
                    <hr/>
                    <div className = "skill_list">
                        <span>Node Js</span>
                    </div>
                    <hr/>
                    <div className = "skill_list">
                        <span>Express Js</span>
                    </div>
                    <hr/>
                    <div className = "skill_list">
                        <span>PHP</span>
                    </div>
                </div>
                <div></div>
                </section>

                <section className = "skill_section_three space pt">
                <div></div>
                <div className = "skill_inner_section">
                   <h4>Database</h4>
                   <hr/>
                   <div className = "skill_list">
                        <span>MongoDb</span>
                    </div>
                    <hr/>
                    <div className = "skill_list">
                        <span>SQL</span>
                    </div>
                    <hr/>
                </div>
                <div></div>
                </section>
                <section className = "skill_section_four space pt">
                <div></div>
                <div className = "skill_inner_section">
                <h4>Other Skills</h4>
                   <hr/>
                   <div className = "skill_list">
                        <span>Graphic Designer (Photoshop)</span>
                    </div>
                    <hr/>
                    <div className = "skill_list">
                        <span>Animating (After Effects)</span>
                    </div>
                    <hr/>
                    <div className = "skill_list">
                        <span>Video Editing</span>
                    </div>
                </div>
                <div></div>
                </section>
                </div>
            </div>
        </React.Fragment> 
    )
}

export default Skill