import React, {useEffect} from 'react'
import EmailComplete from '../Email/EmailComplete'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
        //let quotesB = gsap.utils.toArray('.quote_block')
    useEffect(()=>{
        
    },[])
    
    return(
        <React.Fragment>
            <div className = "contact_container">
                <section className = "contact_section_one space pt">
                    <div></div>
                    <div className = "contact_inner_section">
                        <h4>Contact Me</h4>
                        <div className = "contact_pro_cont">
                            <div className = "contact_svg_container">
                                <EmailComplete />
                            <div className = "add_cont">
                            <span>Tel: +233 266 46 98 46</span>
                            <span>Whatsapp: +233 266 46 9846</span>
                            <span>Email: asiedujosh@yahoo.com</span>
                            </div>
                            </div>
                            {/*<hr/>*/}
                            <div className = "contact_form_container">
                               <div className = "contact_full">
                                <div className = "field">
                                <label>From</label>
                                <input type = "text" name = "emailFrom" />
                                </div>

                                <div className = "field">
                                <label>Message</label>
                                <textarea cols="50" rows="8"></textarea>
                               </div>
                                </div>
                                <p className = "abt_contact_btn">
                                <a href = "#" className = "works see_works contact_btn">
                                    <span>Send Mail</span>
                                <div className = "wave"></div>
                                </a>
                            </p>
                            </div>
                        </div>
                        </div>
                    <div></div>
                </section>
            </div>
        </React.Fragment> 
    )
}

export default Contact