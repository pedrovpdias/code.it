import React from 'react';
import './index.css';

function SocialMedias() {
    return (
        <section id="social-medias">
            <article>
                <h2>Visite nossas redes sociais:</h2>
                <div className="social-medias-list">
                    <ul>
                        <a 
                            href="https://www.linkedin.com/in/pedrovpdias/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            title="LinkedIn"
                        >
                            <li className="social-media">                        
                                <img src="/img/linkedin.png" alt="LinkedIn" />
                            </li>
                        </a>
                        <a 
                                href="https://www.github.com/pedrovpdias/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title="Github"
                        >
                            <li className="social-media">
                                <img src="/img/github.png" alt="Github" />                    
                            </li>
                        </a>
                        <a 
                            href="http://facebook.com/pedrovpdias" 
                            target="_blank" 
                            rel="noopener noreferrer"                 
                            title="Facebook"
                        >
                            <li className="social-media">
                                <img src="/img/facebook.png" alt="Facebook" />
                        </li>
                        </a>    
                        <a 
                                href="http://twitter.com/pedrovpdias" 
                                target= "_blank" 
                                rel="noopener noreferrer"                 
                                title="Twitter"
                            >
                                <li className="social-media">                        
                                <img src="/img/twitter.png" alt="Twitter"/>
                            </li>
                        </a>                       
                        <a 
                            href="http://instagram.com/pedrovpdias" 
                            target= "_blank" 
                            rel="noopener noreferrer"                 
                            title="Instagram"
                        >
                            <li className="social-media">
                                <img src="/img/instagram.png" alt="Instagram"/>                        
                            </li>
                        </a>
                    </ul>
                </div>
            </article>
        </section>
    );
}

export default SocialMedias;