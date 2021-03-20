import React, {useEffect} from 'react'
import img_wrk1 from '../workImages/work_img0.png'
import img_wrk2 from '../workImages/wrk_img1.png'
import img_wrk3 from '../workImages/work_img3.png'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Work = () => {
        //let quotesB = gsap.utils.toArray('.quote_block')

    useEffect(()=>{
        
    },[])
    
    return(
        <React.Fragment>
            <div className = "work_container">
                <section className = "work_section_one space pt">
                    <div></div>
                    <div className = "work_inner_section">
                        <h4>Bank System</h4>
                        <div className = "work_pro_cont">
                            <div className = "works_img_container">
                                <img src = {img_wrk2} alt = "work images One" className = "work_img" />
                            </div>
                            {/*<hr/>*/}
                            <div className = "work_full_detail">
                                <span className = "work_details">
                                    The Bank System can perform basic banking functions such as
                                    Creating an account, Activating different account such as savings 
                                    account, Making deposit, Tranfer funds from one account to another
                                </span>
                                <hr/>
                                <span className = "tls">Tools used</span>
                                <span className = "tools">
                                    *React Js *Node Js *MongoDb *Express
                                </span>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </section>

                <section className = "work_section_two space pt">
                <div></div>
                <div className = "work_inner_section">
                    <h4>Music Maker</h4>
                    <div className = "work_pro_cont">
                    <div className = "works_img_container">
                        <img src = {img_wrk3} alt = "work images two" className = "work_img" />
                    </div>
                    {/*<hr/>*/}
                    <div className = "work_full_detail">
                        <span className = "work_details">
                            This music app can perform basic music application functions such as play, 
                            stop, pause music. It is a desktop application 
                        </span>
                        <hr/>
                        <div>
                        <span className = "tls">Tools used</span>
                        <span className = "tools">
                            *Electron Js and Node Js
                        </span>
                    </div>
                    </div>
                </div>
                </div>
                <div></div>
                </section>

                <section className = "work_section_three space pt">
                <div></div>
                <div className = "work_inner_section">
                    <h4>Shipping App</h4>
                    <div className = "work_pro_cont">
                    <div className = "works_img_container">
                    <img src = {img_wrk1} alt = "work images three" className = "work_img" />
                    </div>
                    {/*<hr/>*/}
                    <div className = "work_full_detail">
                    <span className = "work_details">
                        A shipping application that allows checking and storing of products
                    </span>
                    <div>
                    <hr />
                    <span className = "tls">Tools used</span>
                        <span className = "tools">
                            *HTML, CSS, Javascript, Bootstrap
                        </span>
                    </div>
                    </div>
                </div>
                </div>
                <div></div>
                </section>

            </div>
        </React.Fragment> 
    )
}

export default Work