import React from "react";
import "./navbar.css"

import logo from '../../static/images/logo.png'

class NavBar extends React.Component {
    state = { 
        fixed : true,
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
        if (window.pageYOffset > height) {
            this.setState({fixed: true})
        }
        else {
            this.setState({fixed: false})
        }
    }

    render() {
        const {fixed} = this.state
        console.log(window.pageYOffset)
        return (
            <div className={fixed ? 'navbar fixed' : 'navbar'}>
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