import React from 'react'
import './contact.css'
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {selectValue: '', nameValue: '', emailValue: '', cellValue: '', msgValue: '', clicked: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  
  handleChange(event) {
    this.setState({
      selectValue: event.target.selectValue, 
      nameValue: event.target.nameValue, 
      emailValue: event.target.emailValue,
      cellValue: event.target.cellValue,
      msgValue: event.target.msgValue,
    });
  }
  

  handleSubmit(event) {
    event.preventDefault();
    setTimeout(()=>this.setState({clicked: false}), 5000);
    this.setState({clicked: true});
    this.setState({selectValue: ''});
    this.setState({nameValue: ''});
    this.setState({emailValue: ''});
    this.setState({cellValue: ''});
    this.setState({msgValue: ''});
  }

  render() {
    const clicked = this.state.clicked;
    return (
      <div className="contact">
        <h2>Contato</h2>
        <div className="contact-container">
          
          <div className="contact-form">
            <div className="contac-text">
              <h3>Fale conosco!</h3>
              <p>
                Olá! Preencha o formulário e retornaremos seu email!
              </p>
            </div>
            <form className="form-box">

              <div className="col-3">
                <input className="effect-1" type="text" value={this.state.nameValue} onChange={this.handleChange}
                placeholder="Nome"
                name="name" 
                id="nameInput"/>
                <span className="focus-border"/>
              </div>

              <div className="col-3">
                <input className="effect-1" type="email" value={this.state.emailValue} onChange={this.handleChange}
                id="emailInput"
                placeholder="Email@domain.com"
                name="email" />
                <span className="focus-border"/>
              </div>

              <div className="col-3">
                <input className="effect-1" type="tel" maxLength="12"
                value={this.state.cellValue} onChange={this.handleChange}
                id="cellInput"
                placeholder="Telefone"
                name="cell" />
                <span className="focus-border"/>
              </div>

              <div className="col-3">
                <p>Escolha o tipo de mensagem</p>
                <select value={this.state.selectValue} onChange={this.handleChange} id="appearance-select">
                  <option value="Elogio">Elogio</option>
                  <option value="Orçamento">Orçamento</option>
                  <option value="Sugestao">Sugestão</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div className="col-3">
                <textarea cols="45"
                id="msgInput"
                placeholder="Mensagem" 
                name="msg"
                value={this.state.msgValue} onChange={this.handleChange} 
                >
                </textarea>
                <span className="focus-border"/>
              </div>
        
              <div className="col-3">
                <button onClick={this.handleSubmit}>Enviar Email</button>
              </div>

              {this.state.clicked === true && 
                <div className="col-3">
                  <p>Entraremos em Contato!</p>
                </div>
              }
            
            </form>
          </div>

          <div className="contact-map">
            <div className="map-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.406427785061!2d-43.54772268488928!3d-22.713126236699868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x995c92337776e9%3A0x59ac2a13268bbc5e!2sR.%20Bazar%2C%2054%20-%20Queimados%2C%20RJ%2C%2026380-300!5e0!3m2!1spt-BR!2sbr!4v1597358408326!5m2!1spt-BR!2sbr" title="Localizacao" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"/>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Contact
