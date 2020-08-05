import React from 'react'
import './home.css'

import NavBar from "../../common/navbar/navbar"
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
                    <NavBar/>
                </header>

                <div className="hero" style={{backgroundImage: `url(${hero})`, height: backgroundHeight}}>
                    <h1>
                        PBG <br/> Entender para Atender
                    </h1>
                </div>

                <div style={{height: 500}}>

                </div>

                <footer>
                    {/*<Footer/>*/}
                </footer>
            </div>

        )
    }
}

export default Home