import React from "react";
import { CSSTransition } from 'react-transition-group'

import "./navbar.css"

import logo from '../../static/images/logo.png'

class NavBar extends React.Component {
    state = { 
        fixed : false,
        height : 0
    }

    componentDidMount() {
        this.setState({height : this.props.height})
        window.addEventListener('scroll', this.handleScroll)
    }

    componentDidUpdate(prevProps) {
        if(this.props.height !== prevProps.height) {
            this.setState ({height : this.props.height})
        }
    }

    handleScroll = e => {
         this.fixed()
    }

    fixed = () => {
        let height = this.state.height
        if (window.pageYOffset > height - 1) {
            this.setState({fixed: true})
        }
        else {
            this.setState({fixed: false})
        }
    }

    render() {
        const { fixed } = this.state
        return (
            <CSSTransition
                in={fixed}
                classNames="navbar"
                timeout={150}
                appear
            >
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
            </CSSTransition>
        )
    }
}

export default NavBar