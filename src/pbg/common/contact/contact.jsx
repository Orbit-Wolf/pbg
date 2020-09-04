import React from 'react'
import './contact.css'

export class Contact extends React.Component {
  state = {
    form: {name: '', email: '', cellphone: '',},
    selectValue: '',
    msgValue: '',
  }

  render() {
    const { form } = this.state
    return (
      <div className="contact" id="contact">
        <h2>CONTATO</h2>
        <div className="contact-container">
          <div className="contact-form">
            <form className="form-box">
              <div className="col-3">
                <input className="effect-1" type="text" value={form.name} placeholder="Nome"  name="name"/>
                <span className="focus-border"/>
              </div>

              <div className="col-3">
                <input className="effect-1" type="email" value={form.email} placeholder="email@domain.com" name="email" />
                <span className="focus-border"/>
              </div>

              <div className="col-3">
                <input className="effect-1" type="tel" maxLength="12" value={form.cellphone} placeholder="Celular" name="cell" />
                <span className="focus-border"/>
              </div>

              <div className="col-3">
                <select value={this.state.selectValue}  id="appearance-select">
                  <option value="Elogio">Elogio</option>
                  <option value="Orçamento">Orçamento</option>
                  <option value="Sugestao">Sugestão</option>
                  <option value="other">Outros</option>
                </select>
              </div>

              <div className="col-3">
                <textarea cols="45" placeholder="Mensagem" name="msg" value={this.state.msgValue} />
                <span className="focus-border"/>
              </div>
        
              <div className="col-3">
                <button onClick={this.handleSubmit}>Enviar</button>
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
