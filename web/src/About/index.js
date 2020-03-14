import React from 'react';
import './index.css';

function About(){
    return (
        <section id="about">
                <header>
                    <h1>&#8212; Sobre</h1>
                </header>
                <article>
                    <div className="content">
                        <p>
                            <img src="/img/dev.png" alt="Ícone Dev" className="dev_icon" />
                        </p>
                        <p> 
                            Me chamo Pedro Dias, um apaixonado por tecnologias de desenvolvimento web e mobile.
                        </p>
                        <p>
                            Atuo como <strong>Técnico de Tecnologia da Informação</strong> no Instituto Federal de Educação, Ciencia e Tecnologia do Sul de
                            Minas Gerais - Campus Passos no Núcleo de Tecnologia da Informação há 3 anos e como <strong>Desenvolvedor FullStack</strong> freelancer.
                        </p> 
                        <p>
                            Sou <strong>Especialista em Desenvolvimento em Aplicações Web</strong> pelo Instituto Brasileiro de Formação (2020),
                            <strong> Tecnólogo em Análise e Desenvolvimento de Sistemas</strong> pela Faculdade e Tecnologia de Mococa (2019)
                            e <strong>Técnico em Informática para Internet</strong> pela ETEC João Baptista de Lima Figueiredo (2011).
                        </p>
                    </div>
                </article>
                <footer>
                    <p>
                        Passos - MG / Tapiratiba - SP | (35) 9 9864-8555 / (19) 9 8275-7585 &nbsp;
                        <a 
                            href="http://whatsapp.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"                  
                            title="WhatsApp"
                        >
                            <img src="/img/whatsapp.png" alt="WhatsApp"/>
                        </a>
                    </p>
                </footer>
            </section>
    );
}

export default About;