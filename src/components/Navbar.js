import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return(
        <section className = "main_section">
      <div>{/* Left Space */}</div>
        <div className = "navigation">
          <ul>
            <li>
                <NavLink exact to = "/"
                className = "links works" activeStyle = {{
                    border: "1px solid #fdfd17",
                    fontSize: "1.1em",
                    background: "#fdfd17",
                    color: "#000"
            }}
            >
            <span>Home</span>
            <div className = "wave"></div>
            </NavLink>
            </li>

            <li><NavLink exact to = "/about" 
            className = "links works" activeStyle = {{
                border: "1px solid #fdfd17",
                fontSize: "1.1em",
                background: "#fdfd17",
                color: "#000"
            }}
            >
            <span>About</span>
            <div className = "wave"></div>
            </NavLink>
            </li>

            <li><NavLink exact to = "/skills"
            className = "links works" activeStyle = {{
                border: "1px solid #fdfd17",
                fontSize: "1.1em",
                background: "#fdfd17",
                color: "#000"
            }}>
            <span>Skills</span>
            <div className = "wave"></div>
            </NavLink>
            </li>

            <li><NavLink exact to = "/works"
            className = "links works" 
            activeStyle = {{
                border: "1px solid #fdfd17",
                fontSize: "1.1em",
                background: "#fdfd17",
                color: "#000"
            }}>
            <span>Works</span>
            <div className = "wave"></div>
            </NavLink>
            </li>

         </ul>
        </div>
        <div>{/* Right Space */}</div>
        </section>
    )
}

export default Navbar