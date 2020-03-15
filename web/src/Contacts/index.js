import React from 'react';
import './index.css';

function Contacts(){
    return (
        <section id="contacts">
            <header>
                <h1>&#8212; Contatos</h1>
            </header>
            <article>
                <div className="content">
                    <p>
                        <img src="/img/dev.png" alt="Ícone Dev" className="dev_icon" />
                    </p>
                    <div className="contacts-list">
                        <div className="contacts-item">
                            <h2>Telefone:</h2>
                            Tapiratiba - SP:&nbsp;
                            <a 
                                href="http://whatsapp.com/pedrovpdias" 
                                target="_blank" 
                                rel="noopener noreferrer"                  
                                title="WhatsApp"
                            >
                                (19) 9 8275-7585 &nbsp;
                            </a>
                            <a 
                                href="http://whatsapp.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"                  
                                title="WhatsApp"
                            >
                                <img src="/img/whatsapp.png" alt="WhatsApp"/>
                            </a><br />
                            Passos - MG: (35) 9 9864-8555  
                        </div>
                        <div className="contacts-item">
                            <h2>E-mail:</h2> 
                            pedrovpdias@gmail.com
                        </div>
                        <div className="contacts-item">
                            <h2>LinkedIn:</h2>
                            <a 
                                href="https://www.linkedin.com/in/pedrovpdias/" 
                                target="_blank" 
                                rel="noopener noreferrer"                  
                                title="LinkedIn"
                            >
                                linkedin.com/in/pedrovpdias &nbsp;
                                <img src="/img/linkedin.png" alt="LinkedIn"/>
                            </a>
                        </div>
                        <div className="contacts-item">
                            <h2>Facebook:</h2>
                            <a 
                                href="https://www.facebook.com/pedrovpdias/" 
                                target="_blank" 
                                rel="noopener noreferrer"                  
                                title="Facebook"
                            >
                                facebook.com/pedrovpdias &nbsp;
                                <img src="/img/facebook.png" alt="Facebook"/>
                            </a>
                        </div>
                        <div className="contacts-item">
                            <h2>Twitter:</h2>
                            <a 
                                href="http://twitter.com/pedrovpdias" 
                                target="_blank" 
                                rel="noopener noreferrer"                  
                                title="Twitter"
                            >
                            twitter.com/pedrovpdias &nbsp;
                                <img src="/img/twitter.png" alt="Twitter"/>
                            </a>
                        </div>
                        <div className="contacts-item">
                            <h2>Instagram:</h2>
                            <a 
                                href="http://instagram.com/pedrovpdias" 
                                target="_blank" 
                                rel="noopener noreferrer"                  
                                title="Instagram"
                            >
                                instagram.com/pedrovpdias &nbsp;
                                <img src="/img/instagram.png" alt="Instagram"/>
                            </a>
                        </div>       
                    </div>
                </div>
            </article>
            <footer>
            </footer>
        </section>
    );
}

export default Contacts;