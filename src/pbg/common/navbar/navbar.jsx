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
                        QUEM SOMOS
                    </li>
                    <li>
                        PORTFOLIO
                    </li>
                    <li>
                        CONTATO
                    </li>
                </ul>
            </div>
        )
    }

}

export default NavBar