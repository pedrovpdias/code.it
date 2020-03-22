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