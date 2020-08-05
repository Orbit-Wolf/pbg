import React from "react";
import "./navbar.css"

import logo from './logo.png'

class NavBar extends React.Component {
    state = {

    }

    render() {
        return (
            <div className="navbar">
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt="logo"/>
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="#about">QUEM SOMOS</a>
                    </li>
                    <li>
                        <a href="#portifolio">PORTFOLIO</a>
                    </li>
                    <li>
                        <a href="#contact">CONTATO</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar