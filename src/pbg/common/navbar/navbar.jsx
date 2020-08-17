import React from "react";
import "./navbar.css"

import logo from '../../static/images/logo.png'

class NavBar extends React.Component {
    state = {

    }

    render() {
        return (
            <div className="navbar">
                <div className="logo">
                    <a href="#main">
                        <img src={logo} alt="logo"/>
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="#about">QUEM SOMOS</a>
                    </li>
                    <li>
                        <a href="#service">SERVIÇOS</a>
                    </li>
                    <li>
                        <a href="#portfolio">PORTFÓLIO</a>
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