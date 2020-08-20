import React from 'react'
import './contact.css'
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


export class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <h2>Contato</h2>
                <div className="contact-container">
                    <div className="contact-form">
                        <form>
                            <label>
                                <input />
                            </label>
                        </form>
                    </div>
                    {/*<div className="contact-map">*/}
                    {/*    <div className="map-center">*/}
                    {/*        <Map*/}
                    {/*          google={this.props.google}*/}
                    {/*          zoom={17}*/}
                    {/*          style={{width: "550px", height: "350px"}}*/}
                    {/*          initialCenter={{ lat: -22.713082, lng: -43.545528}}*/}
                    {/*        >*/}
                    {/*             <Marker position={{ lat: -22.713082, lng: -43.545528}} />*/}
                    {/*        </Map>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

            </div>
        )
    }
}

// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyD-mvB-8DQ8YByYIuYbyU7wXtQIS12yd28")
// })(Contact)

export default Contact

