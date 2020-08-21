import React from 'react'
import './contact.css'
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class Contact extends React.Component {

  // constructor(props) {
  //   super(props);
  // } 

  
  handleSubmit(event) {
    alert('A form was submitted');
    event.preventDefault();
  }

  render() {
    return (
      <div className="contact">
        <h2>Contato</h2>
        <div className="contact-container">
          
          <div className="contact-form">
            <div className="contac-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed dolor fringilla tellus
                pharetra convallis eu id mauris. Suspendisse potenti. Ut non nibh eget lorem congue tristique
                sed eu felis. Nam dignissim convallis tortor. Nunc venenatis est eu ex fermentum, non commodo
                velit dictum. Duis hendrerit, velit dapibus ullamcorper euismod, ex ante laoreet urna, vitae
                
              </p>
            </div>
            <form>

              <div className="col-3">
                <input className="effect-1" type="text" 
                placeholder="Nome"
                name="name" 
                id="nameImput"/>
                <span className="focus-border"></span>
              </div>

              <div className="col-3">
                <input className="effect-1" type="email"
                id="emailImput"
                placeholder="Email@domain.com"
                name="email" />
                <span className="focus-border"></span>
              </div>

              <div className="col-3">
                <button onClick={this.handleSubmit}>Enviar Email</button>
              </div>
            
            </form>
          </div>

          <div className="contact-map">
            <div className="map-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.406427785061!2d-43.54772268488928!3d-22.713126236699868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x995c92337776e9%3A0x59ac2a13268bbc5e!2sR.%20Bazar%2C%2054%20-%20Queimados%2C%20RJ%2C%2026380-300!5e0!3m2!1spt-BR!2sbr!4v1597358408326!5m2!1spt-BR!2sbr" title="Localizacao" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
              {/* <Map
                google={this.props.google}
                zoom={17}
                style={{width: "550px", height: "350px"}}
                initialCenter={{ lat: -22.713082, lng: -43.545528}}
              >
              <Marker position={{ lat: -22.713082, lng: -43.545528}} />
              </Map> */}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyD-mvB-8DQ8YByYIuYbyU7wXtQIS12yd28")
// })(Contact)

export default Contact
