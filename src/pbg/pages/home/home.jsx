import React from 'react'
import '../../global.css'
import './home.css'

import NavBar from "../../common/navbar/navbar"
import About from "../../common/about/about"
import Service from "../../common/service/service"
import Portfolio from "../../common/portfolio/portfolio"
import Contact from "../../common/contact/contact"
import Footer from "../../common/footer/footer"

import hero from "./hero.jpg"

class Home extends React.Component {
    state = {
        backgroundHeight: 0,
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleWindowResize)
        this.windowResize()
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize)
    }

    handleWindowResize = e => {
        this.windowResize()
    }

    windowResize = () => {
        if (window.innerHeight >= 651) {
            this.setState({backgroundHeight: window.innerHeight })
        }
        else if (window.innerHeight <= 650)  {
            this.setState({backgroundHeight: 650})
        }
    }

    render() {
        const { backgroundHeight } = this.state
        return (
            <div className="home">
                <header>
                    <NavBar height={backgroundHeight}/>
                </header>

                <div className="hero" id="main" style={{backgroundImage: `url(${hero})`, height: backgroundHeight}}>
                    <div className="main">
                        <h1>
                            ENTENDER PARA ATENDER
                        </h1>
                        <h2>
                            Atuamos na área de engenharia.
                            Nosso objetivo é sempre fazer o melhor,
                            <br/>
                            buscando sempre a excelência em nossos trabalhos.
                            <br/>
                            Aproveite, fazemos <a href="/" className="primary-color">consultoria gratis!</a>
                        </h2>
                    </div>

                    <div className="hero-more">
                        <i className="material-icons">expand_more</i>
                    </div>
                </div>

                <About/>

                <Service/>

                <Portfolio/>

                <Contact/>

                <footer>
                    <Footer/>
                </footer>
            </div>
        )
    }
}

export default Home