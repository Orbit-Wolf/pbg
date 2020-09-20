import React from 'react'
import './service.css'

function Service() {
    return (
        <div className="service" id="service">
            <h2>SERVIÇOS</h2>

            <section>
            <div className="row align-items-center">
                <div className="col-50">
                <img src="https://img.freepik.com/fotos-gratis/plano-de-abertura-da-pessoa_23-2147710988.jpg?size=626&ext=jpg" alt="image" />
                </div>
                <div className="col-50">
                <article>
                    <h3>VISÃO GERAL</h3>
                    <p>
                        Nossa empresa presta os Serviços de Manutenção no geral e Instalações de Redes Elétricas , Drywall e PVC .
                    </p>
                    <h4>Principais Serviços</h4>
                    <p>
                        Oferecemos Serviços de instalações elétricas e infraestrutura como eletrocalhas,
                        perfilados e eletrodutos, envolvendo a instalação de tomadas, luminárias, circuitos elétricos e redes
                        lógicas.
                    </p>
                    <p>
                        Soluções Integradas em serviços de Construção, Manutenção, Conservação, Limpeza e Apoio com um portfólio completo e especializado para atender de forma otimizada a sua empresa.
                        Somos especialistas na instalação de Drywall, Sancas,  Molduras e Gesso 3D.
                    </p>
            
                    <p>
                        Instalação e a manutenção de forro PVC de forma prática e ágil por profissionais capacitados.
                    </p>
                    <a href="#portfolio" className="btn mt-1 mb-2">Explore</a>
                </article>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Service