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
                        PORTFOLIO
                    </li>
                    <li>
                        ORGAÇAMENTO GRATIS!
                    </li>
                </ul>
            </div>
        )
    }

}

export default NavBar