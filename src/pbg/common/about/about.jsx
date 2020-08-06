import React from 'react'
import './about.css'

import logo from '../../static/images/logo.png'
import about from './about.jpg'

class About extends React.Component {


    render() {
        return (
            <div className="about"  id="about">
                <h2>CONHEÇA MAIS SOBRE A PBG</h2>
                <div className="about-info">
                    <div className="about-text">
                    <img className="about-logo" src={logo} alt="logo"/>
                        <p>Entender para atender</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed dolor fringilla tellus
                            pharetra convallis eu id mauris. Suspendisse potenti. Ut non nibh eget lorem congue tristique
                            sed eu felis. Nam dignissim convallis tortor. Nunc venenatis est eu ex fermentum, non commodo
                            velit dictum. Duis hendrerit, velit dapibus ullamcorper euismod, ex ante laoreet urna, vitae
                        </p>
                        <p>
                            Aliquam porttitor, eros et sodales sollicitudin, sem felis finibus erat, ut elementum risus
                            massa pulvinar felis. Mauris auctor ipsum sit amet dui sagittis pharetra. Nulla mollis accumsan
                            molestie. Suspendisse sed odio quis tellus cursus malesuada sit amet sit amet nibh. Duis sit amet
                        </p>
                        <p>
                            felis leo. Curabitur posuere nisi erat, vitae facilisis lectus placerat et. Suspendisse ac leo mattis,
                            posuere lorem ac, ornare libero. Cras et eleifend ex. Lorem ipsum dolor sit amet, consectetur adipiscing
                       </p>
                    </div>
                    <div className="about-diff">
                        <div>
                            <h3>VANTAGENS</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About