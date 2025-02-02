import React from 'react';
import './index.css';

function Services(){
    return (
        <section id="services">
            <header>
                <h1>Serviços</h1>
            </header>
            <article>
                <div className="content">
                    <div className="services-list">
                        <div className="services-item">
                            <img src="/img/mobile.png" alt="Mobile" title="Mobile"/>
                            <h2>Aplicativos Mobile</h2>
                            <p>
                                Desenvolvimento de aplicativos para dispositivos móveis Android e iOS
                            </p>                
                        </div>
                        <div className="services-item">
                            <img src="/img/sites.png" alt="Sites" title="Sites"/>
                            <h2>Criação de Sites</h2>
                            <p>
                                Desenvolvimento de sites e sistemas web com as melhores tecnologias
                            </p> 
                        </div>
                        <div className="services-item">
                            <img src="/img/frontend.png" alt="Front-end" title="Front-end"/>
                            <h2>Front-end</h2>
                            <p>
                                Especialista em HTML5, CSS3, Bootstrap, jQuery e ReactJS
                            </p>
                        </div>
                        <div className="services-item">
                            <img src="/img/backend.png" alt="Backend" title="Backend"/>                
                            <h2>Back-end</h2>
                            <p>
                                Especialista em linguagens de programação PHP, Node.js, SQL e NoSQL
                            </p>
                        </div>
                        <div className="services-item">
                            <img src="/img/portal.png" alt="Portais" title="Portais"/>                
                            <h2>Portais / Lojas Virtuais</h2>
                            <p>
                                Criação de portais, fóruns, sites institucionais, landing pages e e-commerce
                            </p>
                        </div>
                        <div className="services-item">
                            <img src="/img/seo.png" alt="SEO" title="SEO"/>                
                            <h2>Search Engine Optimization</h2>
                            <p>
                                Estratégias SEO de otimização para melhorar o posicionamento do site em páginas de busca 
                            </p>
                        </div>
                    </div>
                </div>
            </article>
            <footer>
            </footer>
        </section>
    );
}

export default Services;