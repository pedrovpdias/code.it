import React from 'react';
import './index.css';


function Home(){
    return (
        <header id="home">        
            <nav className="navbar main-menu">
                <ul>
                    <li className="logo-icon">
                        <img src="/img/codeit-icon.png" className="logo-menu" alt="Code.it" />
                    </li>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">Sobre</a>
                    </li>
                    <li>
                        <a href="#services">Serviços</a>
                    </li>
                    <li>
                        <a href="#techs">Tecnologias</a>
                    </li>
                    <li>
                        <a href="#contacts">Contatos</a>
                    </li>
                    <li className="social-media">
                        <a 
                            href="https://www.linkedin.com/in/pedrovpdias/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            title="LinkedIn"
                        >
                            <img src="/img/linkedin.png" alt="LinkedIn" />
                        </a>
                    </li>
                    <li className="social-media">
                        <a 
                            href="https://www.github.com/pedrovpdias/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            title="Github"
                        >
                            <img src="/img/github.png" alt="Github" />
                        </a>
                    </li>
                    <li className="social-media">
                        <a 
                            href="http://facebook.com/pedrovpdias" 
                            target="_blank" 
                            rel="noopener noreferrer"                 
                            title="Facebook"
                        >
                            <img src="/img/facebook.png" alt="Facebook" />
                        </a>
                    </li>
                    <li className="social-media">
                        <a 
                            href="http://twitter.com/pedrovpdias" 
                            target= "_blank" 
                            rel="noopener noreferrer"                 
                            title="Twitter"
                        >
                            <img src="/img/twitter.png" alt="Twitter"/>
                        </a>
                    </li>
                    <li className="social-media">
                        <a 
                            href="http://instagram.com/pedrovpdias" 
                            target= "_blank" 
                            rel="noopener noreferrer"                 
                            title="Instagram"
                        >
                            <img src="/img/instagram.png" alt="Instagram"/>
                        </a>
                    </li>
                </ul>
            </nav>
            <section className="home-section">
                <aside>
                    <img src="/img/codeit-full-dark.png" alt="logo"/>
                </aside>
                <article >
                    <ul>
                        <li>Freelancer</li>
                        <li>Desenvolvedor Web</li>
                        <li>Desenvolvedor mobile</li>
                        <li>Desenvolvedor Backend</li>
                        <li>Especialista em Desenvolvimento Web</li>
                    </ul>
                </article>       
            </section>
        </header>
    );
}

export default Home;