import React from "react";
import "./navbar.css"

class NavBar extends React.Component {
    state = {

    }

    render() {
        return (
            <div className="navbar">
                {/*<div className="logo">*/}
                {/*    <a href="/">*/}
                {/*        <img />*/}
                {/*    </a>*/}
                {/*</div>*/}
                <ul>
                    <li>
                        Portfolio
                    </li>
                    <li>
                        Contato
                    </li>
                </ul>
            </div>
        )
    }

}

export default NavBar