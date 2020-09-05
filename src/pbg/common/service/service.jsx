import React from 'react'
import './service.css'
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'

import { cardview } from  "./cardview";

function Service() {
    return (
        <div className="service" id="service">
            
            <h2>SERVIÇOS</h2>
            <div className="container" id="container">
            <section>
               

                <section className="card">
                    <img className="card-image" src={img1}/>
                    <h3> Instalação de Rede Elétrica </h3>
                <p>Serviços de instalações elétricas e infraestrutura como eletrocalhas,
                     perfilados e eletrodutos, envolvendo a instalação de tomadas, luminárias, circuitos elétricos e redes
                      lógicas.</p>
                </section>

            </section>

            <section>
                <section className="card">
                    <img className="card-image" src={img2}/>
                    <h3> Manutenção no Geral </h3>
                    <p> Soluções Integradas em serviços de Construção, Manutenção, Conservação, Limpeza e Apoio com um portfólio completo e especializado para atender de forma otimizada a sua empresa.</p>
                </section>

            </section>

            <section>
                <section className="card">
                    <img className="card-image" src={img3}/>
                    <h3> Instalação de Drywall </h3>
                    <p> Somos especialistas na instalação de Drywall, Sancas,  Molduras e Gesso 3D.</p>
                </section>

            </section>

            <section>
                <section className="card">
                    <img className="card-image" src={img4}/>
                    <h3>  Instalação de PVC </h3>
                    <p> Instalação e a manutenção de forro PVC de forma prática e ágil por profissionais capacitados. </p>
                </section>

            </section>
            </div>
        </div>
    )
}

export default Service