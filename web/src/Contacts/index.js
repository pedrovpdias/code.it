import React from 'react';
import Mailto from 'react-protected-mailto'
import './index.css';

function Contacts(){
    return (
        <section id="contacts">
            <header>
                <h1>Contatos</h1>
            </header>
            <article>
                <div className="content">
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
                    <form>
                        <h3>Fale conosco</h3>
                        <div className="form-group">
                            <label>Nome:</label>
                            <input type="text" id="nome" />
                        </div>
                        <div className="form-group">
                            <label>E-mail:</label>
                            <input type="text" id="email" />
                            </div>
                        <div className="form-group">
                            <label>Celular:</label>
                            <input type="text" id="celular" />
                        </div>
                        <div className="form-group">
                            <label>Motivo do contato</label>
                            <select id="motivo">
                                <option value="Orçamento">Orçamento</option>
                                <option value="Elogio">Elogio</option>
                                <option value="Reclamação">Reclamação</option>
                                <option value="Dúvida">Dúvida</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Mensagem:</label>
                            <textarea id="mensagem" ></textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Enviar" />
                        </div>
                    </form>
                </div>
            </article>
            <footer>
            </footer>
        </section>
    );
}

export default Contacts;